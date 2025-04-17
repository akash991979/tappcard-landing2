"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ChevronRight, Mail } from "lucide-react"
import Link from "next/link"
import * as React from "react"

// Canvas animation implementation
function n(e: any) {
  this.init(e || {});
}

n.prototype = {
  init: function (e: any) {
    this.phase = e.phase || 0;
    this.offset = e.offset || 0;
    this.frequency = e.frequency || 0.001;
    this.amplitude = e.amplitude || 1;
  },
  update: function () {
    return (
      (this.phase += this.frequency),
      (e = this.offset + Math.sin(this.phase) * this.amplitude)
    );
  },
  value: function () {
    return e;
  },
};

function Line(e: any) {
  this.init(e || {});
}

Line.prototype = {
  init: function (e: any) {
    this.spring = e.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (var t, n = 0; n < E.size; n++) {
      t = new Node();
      t.x = pos.x;
      t.y = pos.y;
      this.nodes.push(t);
    }
  },
  update: function () {
    let e = this.spring,
      t = this.nodes[0];
    t.vx += (pos.x - t.x) * e;
    t.vy += (pos.y - t.y) * e;
    for (var n, i = 0, a = this.nodes.length; i < a; i++)
      (t = this.nodes[i]),
        0 < i &&
          ((n = this.nodes[i - 1]),
          (t.vx += (n.x - t.x) * e),
          (t.vy += (n.y - t.y) * e),
          (t.vx += n.vx * E.dampening),
          (t.vy += n.vy * E.dampening)),
        (t.vx *= this.friction),
        (t.vy *= this.friction),
        (t.x += t.vx),
        (t.y += t.vy),
        (e *= E.tension);
  },
  draw: function () {
    let e,
      t,
      n = this.nodes[0].x,
      i = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(n, i);
    for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
      e = this.nodes[a];
      t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    e = this.nodes[a];
    t = this.nodes[a + 1];
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    ctx.stroke();
    ctx.closePath();
  },
};

function onMousemove(e: any) {
  function o() {
    lines = [];
    for (let e = 0; e < E.trails; e++)
      lines.push(new Line({ spring: 0.45 + (e / E.trails) * 0.025 }));
  }
  function c(e: any) {
    e.touches
      ? ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
      : ((pos.x = e.clientX), (pos.y = e.clientY)),
      e.preventDefault();
  }
  function l(e: any) {
    1 == e.touches.length &&
      ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY));
  }
  document.removeEventListener("mousemove", onMousemove),
    document.removeEventListener("touchstart", onMousemove),
    document.addEventListener("mousemove", c),
    document.addEventListener("touchmove", c),
    document.addEventListener("touchstart", l),
    c(e),
    o(),
    render();
}

function render() {
  if (ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",100%,50%,0.025)";
    ctx.lineWidth = 10;
    for (var e, t = 0; t < E.trails; t++) {
      (e = lines[t]).update();
      e.draw();
    }
    ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

var ctx: any,
  f: any,
  e = 0,
  pos: any = {},
  lines: any = [],
  E = {
    debug: true,
    friction: 0.5,
    trails: 80,
    size: 50,
    dampening: 0.025,
    tension: 0.99,
  };

function Node() {
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
}

const renderCanvas = function () {
  // @ts-ignore - Add this line to ignore the TypeScript error
  ctx = document.getElementById("canvas")?.getContext("2d");
  if (!ctx) return;
  
  ctx.running = true;
  ctx.frame = 1;
  f = new n({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  document.addEventListener("mousemove", onMousemove);
  document.addEventListener("touchstart", onMousemove);
  document.body.addEventListener("orientationchange", resizeCanvas);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("focus", () => {
    if (!ctx.running) {
      ctx.running = true;
      render();
    }
  });
  window.addEventListener("blur", () => {
    ctx.running = true;
  });
  resizeCanvas();
};

// 3D Card component
interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Spotlight: React.FC<SpotlightProps> = ({ 
  children, 
  className = "",
  ...props 
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const mousePosition = React.useRef({ x: 0, y: 0 });
  const mouse = React.useRef({ x: 0, y: 0 });
  const containerSize = React.useRef({ w: 0, h: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const { w, h } = containerSize.current;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const inside = x < w && x > 0 && y < h && y > 0;
    
    if (inside) {
      mousePosition.current.x = x;
      mousePosition.current.y = y;
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  };

  React.useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    containerSize.current.w = rect.width;
    containerSize.current.h = rect.height;
  }, []);

  React.useEffect(() => {
    const updateMouse = () => {
      if (!isHovering) {
        mouse.current.x = mouse.current.x * 0.9 + containerSize.current.w * 0.5 * 0.1;
        mouse.current.y = mouse.current.y * 0.9 + containerSize.current.h * 0.5 * 0.1;
      } else {
        mouse.current.x = mouse.current.x * 0.8 + mousePosition.current.x * 0.2;
        mouse.current.y = mouse.current.y * 0.8 + mousePosition.current.y * 0.2;
      }
      if (containerRef.current) {
        const { w, h } = containerSize.current;
        const x = mouse.current.x;
        const y = mouse.current.y;
        const spotlightSize = isHovering ? 320 : 0;
        containerRef.current.style.setProperty("--x", `${x}px`);
        containerRef.current.style.setProperty("--y", `${y}px`);
        containerRef.current.style.setProperty("--size", `${spotlightSize}px`);
      }
      requestAnimationFrame(updateMouse);
    };

    const frame = requestAnimationFrame(updateMouse);
    return () => cancelAnimationFrame(frame);
  }, [isHovering]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-md border border-border/5 bg-background",
        "before:absolute before:inset-0 before:z-10 before:bg-[radial-gradient(var(--size)_circle_at_var(--x)_var(--y),rgba(255,255,255,0.1),transparent_80%)]",
        "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        className
      )}
      style={{
        "--x": "50%",
        "--y": "50%",
        "--size": "0px",
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
};

// Main component
interface TappCardLandingProps {
  className?: string;
}

const TappCardLanding: React.FC<TappCardLandingProps> = ({ className }) => {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [videoError, setVideoError] = React.useState(false);
  const emailInputRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    renderCanvas();
  }, []);
  
  const handleSubmit = async () => {
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const scrollToEmailInput = () => {
    if (emailInputRef.current) {
      emailInputRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoError = () => {
    console.log("Video failed to load, falling back to poster image");
    setVideoError(true);
  };

  return (
    <div className={cn("relative min-h-screen bg-background text-foreground overflow-hidden", className)}>
      {/* Background canvas animation */}
      <canvas
        className="pointer-events-none absolute inset-0 z-0"
        id="canvas"
      ></canvas>
      
      {/* Hero section */}
      <section className="relative z-10 flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background">
        <div className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center">
          <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />
          
          {/* Main glow */}
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />
          
          {/* Lamp effect */}
          <motion.div
            initial={{ width: "8rem" }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            whileInView={{ width: "16rem" }}
            className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-primary/60 blur-2xl"
          />
          
          {/* Top line */}
          <motion.div
            initial={{ width: "15rem" }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
            whileInView={{ width: "30rem" }}
            className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-primary/60"
          />
          
          {/* Left gradient cone */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-primary/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          
          {/* Right gradient cone */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary/60 [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex justify-center flex-1 flex-col px-5 md:px-10 gap-8"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative flex items-center whitespace-nowrap rounded-full border bg-popover px-3 py-1 text-xs leading-6 text-primary/60">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Beta Access Available Now
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              The Future of <span className="text-primary">Professional</span> Connections
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-[600px]">
              TappCard.io revolutionizes how professionals connect, share information, and build networks in a digital-first world.
            </p>
            
            <div ref={emailInputRef} className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pr-12 h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit();
                    }
                  }}
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 top-1 h-10"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Join Beta'}
                </Button>
              </div>
              {submitStatus === 'success' && (
                <p className="text-sm text-green-500 mt-2">Thank you! Check your email.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-500 mt-2">Failed to send email. Please try again.</p>
              )}
            </div>
          </div>

          {/* 3D Card Preview */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full max-w-5xl mx-auto mt-8"
          >
            {!videoError ? (
              // Video as main element
              <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative overflow-hidden rounded-md">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onError={handleVideoError}
                >
                  <source src="/videos/card-animation.mp4" type="video/mp4" />
                </video>
                
                {/* Empty container for any future content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Video only - no overlay content */}
                </div>
              </div>
            ) : (
              // Original Spotlight with Card as fallback
              <Spotlight className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="w-full max-w-md"
                  >
                    <Card className="w-full h-64 bg-background/50 backdrop-blur-sm border-primary/20 overflow-hidden">
                      <div className="p-6 h-full flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">TappCard</h3>
                            <p className="text-sm text-muted-foreground">Digital Business Card</p>
                          </div>
                          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary font-bold">TC</span>
                          </div>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-full bg-background/80"></div>
                            <div>
                              <p className="font-medium">Your Name</p>
                              <p className="text-xs text-muted-foreground">Position • Company</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </Spotlight>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Features section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Redefining Professional Networking
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Instant Sharing",
                description: "Share your professional profile with a simple tap or scan",
              },
              {
                title: "Digital-First",
                description: "Environmentally friendly alternative to traditional business cards",
              },
              {
                title: "Always Updated",
                description: "Your contacts always see your most current information",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background/50 backdrop-blur-sm border border-border/10 rounded-lg p-6"
              >
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative z-10 py-20 px-4 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Future of Networking
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Be among the first to experience TappCard.io and transform how you connect professionally.
          </p>
          <Button size="lg" className="mr-4" onClick={scrollToEmailInput}>
            <Mail className="mr-2 h-4 w-4" />
            Get Beta Access
          </Button>
          <Button variant="outline" size="lg">
            Learn More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-border/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2023 TappCard.io. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TappCardLanding;
