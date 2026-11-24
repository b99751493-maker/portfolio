import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Briefcase, Code2, Globe, Layers3, Mail, Menu, MoveRight, PenTool, Send, Sparkles, X } from "lucide-react";
import { filters, journey, process, profile, projectGallery, skills, stats } from "../data.js";

function HeroCityScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let disposed = false;
    let disposeScene = () => {};

    void import("three").then((THREE) => {
      if (disposed) return;

      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      } catch {
        mount.dataset.scene = "unavailable";
        return;
      }

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
      camera.position.set(11, 8, 15);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const city = new THREE.Group();
      scene.add(city);

      const ambient = new THREE.HemisphereLight(0x9ecbff, 0x0a1520, 1.8);
      scene.add(ambient);

      const keyLight = new THREE.DirectionalLight(0xeaf1ff, 2.3);
      keyLight.position.set(-4, 9, 6);
      scene.add(keyLight);

      const stadiumLight = new THREE.PointLight(0x5ea9ff, 26, 16, 2);
      stadiumLight.position.set(0, 1.7, 0.8);
      scene.add(stadiumLight);

      const material = (color, roughness = 0.75, metalness = 0.12, emissive = 0x000000) =>
        new THREE.MeshStandardMaterial({ color, roughness, metalness, emissive, emissiveIntensity: 0.9 });

      const ground = new THREE.Mesh(new THREE.BoxGeometry(18, 0.4, 13), material(0x1a2833, 0.9));
      ground.position.y = -0.55;
      city.add(ground);

      for (let x = -7; x <= 7; x += 2) {
        const line = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 10.4), material(0x445466, 0.7));
        line.position.set(x, -0.38, 0);
        city.add(line);
      }

      const roads = [
        { x: 0, z: 0, width: 1.2, depth: 10.7 },
        { x: 0, z: -3.2, width: 14.5, depth: 0.8 },
        { x: 0, z: 3.1, width: 14.5, depth: 0.8 },
      ];
      roads.forEach(({ x, z, width, depth }) => {
        const road = new THREE.Mesh(new THREE.BoxGeometry(width, 0.04, depth), material(0x0d1620, 0.95));
        road.position.set(x, -0.34, z);
        city.add(road);
      });

      for (let z = -5; z < 5; z += 0.8) {
        const lane = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.014, 0.25), material(0x7d9bb7, 0.75, 0.15, 0x20364a));
        lane.position.set(0, -0.31, z);
        city.add(lane);
      }

      const stadium = new THREE.Group();
      stadium.position.set(0, -0.28, 0.7);
      city.add(stadium);

      const bowl = new THREE.Mesh(new THREE.CylinderGeometry(2.25, 1.9, 0.7, 52, 1, true), material(0x3a4659, 0.42, 0.52));
      bowl.position.y = 0.15;
      stadium.add(bowl);

      const field = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.05, 1.3), material(0x2a8d78, 0.78, 0.1, 0x0a3b29));
      field.position.y = -0.24;
      stadium.add(field);

      const roof = new THREE.Mesh(new THREE.TorusGeometry(2.18, 0.09, 8, 64), material(0xb6cfe9, 0.25, 0.7, 0x184364));
      roof.rotation.x = Math.PI / 2;
      roof.position.y = 0.62;
      stadium.add(roof);

      const buildingPalette = [0x223548, 0x283d4d, 0x2d4054, 0x334a60];
      const windowMaterial = material(0x8dbdff, 0.3, 0.2, 0x355d8d);
      const buildingSpecs = [
        [-5.9, -3.9, 1.1, 2.3, 1.2], [-3.7, -4.1, 1.1, 1.5, 1.2], [-1.8, -4.1, 0.9, 2.7, 1.1],
        [2.1, -4.1, 1.05, 1.9, 1.15], [4.4, -4.15, 1.1, 2.7, 1.05], [6.1, -3.9, 0.9, 1.6, 1.2],
        [-6.1, -1.5, 1.1, 1.8, 1.0], [-4.2, -1.5, 0.9, 3.0, 0.95], [4.2, -1.6, 1.0, 2.4, 1.0], [6.0, -1.8, 1.1, 2.4, 1.1],
        [-5.8, 1.7, 1.2, 2.6, 1.0], [-4.0, 1.7, 0.9, 1.7, 1.05], [4.1, 1.6, 1.0, 2.8, 1.0], [6.1, 1.6, 0.95, 1.9, 1.1],
        [-5.5, 4.1, 1.1, 1.8, 1.0], [-3.7, 4.1, 1.0, 2.7, 1.1], [-1.7, 4.1, 0.95, 1.55, 1.1], [2.3, 4.1, 1.0, 2.5, 1.0], [4.1, 4.1, 1.15, 1.6, 1.0], [6.0, 4.1, 1.0, 2.1, 1.1],
      ];

      buildingSpecs.forEach(([x, z, width, height, depth], index) => {
        const building = new THREE.Group();
        const body = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material(buildingPalette[index % buildingPalette.length], 0.4, 0.58));
        body.position.y = height / 2 - 0.3;
        building.add(body);

        const floors = Math.max(2, Math.floor(height * 2));
        for (let floorIndex = 0; floorIndex < floors; floorIndex += 1) {
          const strip = new THREE.Mesh(new THREE.BoxGeometry(width * 0.7, 0.04, depth + 0.02), windowMaterial);
          strip.position.set(0, -0.28 + ((floorIndex + 0.7) / floors) * (height - 0.25), 0);
          building.add(strip);
        }

        building.position.set(x, 0, z);
        city.add(building);
      });

      const cars = [];
      const carMaterial = [material(0x51b8ff, 0.2, 0.48, 0x1d76c7), material(0xffa56d, 0.25, 0.36, 0x8b4c2d)];
      for (let index = 0; index < 6; index += 1) {
        const car = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.08, 0.34), carMaterial[index % 2]);
        const glow = new THREE.PointLight(index % 2 ? 0xffb37b : 0x65baff, 1.4, 1.3);
        car.add(glow);
        city.add(car);
        cars.push(car);
      }

      const particlesGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(240 * 3);
      for (let index = 0; index < 240; index += 1) {
        particlePositions[index * 3] = (Math.random() - 0.5) * 18;
        particlePositions[index * 3 + 1] = Math.random() * 6 - 0.15;
        particlePositions[index * 3 + 2] = (Math.random() - 0.5) * 12;
      }
      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
      const particles = new THREE.Points(
        particlesGeometry,
        new THREE.PointsMaterial({ color: 0xc7dcff, size: 0.03, transparent: true, opacity: 0.75 }),
      );
      scene.add(particles);

      const pointer = new THREE.Vector2();
      const target = new THREE.Vector2();
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const resize = () => {
        const { width, height } = mount.getBoundingClientRect();
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.position.set(width < 680 ? 12 : 11, 9, width < 680 ? 17 : 15);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      const observer = new ResizeObserver(resize);
      observer.observe(mount);
      resize();
      mount.dataset.scene = "ready";

      const onPointerMove = (event) => {
        const bounds = mount.getBoundingClientRect();
        target.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.7;
        target.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.4;
      };

      mount.addEventListener("pointermove", onPointerMove);

      let frameId;
      const clock = new THREE.Clock();
      const animate = () => {
        const elapsed = clock.getElapsedTime();
        pointer.lerp(target, 0.04);

        if (!reducedMotion) {
          city.rotation.y = pointer.x;
          city.rotation.x = pointer.y * 0.18;
          particles.rotation.y = elapsed * 0.012;

          cars.forEach((car, index) => {
            const progress = (elapsed * 0.15 + index / cars.length) % 1;
            car.position.set(-6.8 + progress * 13.6, -0.26, index % 2 === 0 ? 3.1 : -3.1);
            car.rotation.y = index % 2 === 0 ? 0 : Math.PI;
          });
        }

        renderer.render(scene, camera);
        if (!reducedMotion && !document.hidden) {
          frameId = window.requestAnimationFrame(animate);
        }
      };

      animate();

      disposeScene = () => {
        window.cancelAnimationFrame(frameId);
        observer.disconnect();
        mount.removeEventListener("pointermove", onPointerMove);
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((item) => item.dispose());
          }
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => {
      mount.dataset.scene = "unavailable";
    });

    return () => {
      disposed = true;
      disposeScene();
    };
  }, []);

  return (
    <div className="relative h-[420px] w-full max-w-[620px] md:h-[540px]">
      <div ref={mountRef} className="h-full w-full rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.28),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.7),rgba(2,6,23,0.2))]" />
      <div className="pointer-events-none absolute inset-x-10 top-4 flex justify-between text-[9px] uppercase tracking-[0.32em] text-slate-400/80">
        <span>City / 01</span>
        <span>Live System</span>
      </div>
      <div className="pointer-events-none absolute inset-x-10 bottom-4 flex justify-between text-[9px] uppercase tracking-[0.32em] text-slate-400/80">
        <span>stability</span>
        <span>signal</span>
      </div>
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#expertise", label: "Expertise" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-colors duration-300 ${scrolled ? "bg-slate-950/85" : "bg-slate-950/60"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label="Home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 text-sm font-semibold text-cyan-200">Z</span>
          <span className="leading-none">
            <span className="block text-sm font-semibold tracking-[0.18em]">ZAYD NOOR</span>
            <span className="block text-[9px] uppercase tracking-[0.28em] text-slate-400">Creative developer</span>
          </span>
        </a>

        <ul className={`hidden items-center gap-7 text-[11px] uppercase tracking-[0.24em] text-slate-300 md:flex`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-cyan-300">{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/20">Let&apos;s talk <ArrowUpRight size={13} /></a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 md:hidden">
          <ul className="space-y-3 text-sm text-slate-200">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block py-2">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function HomeHero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 bg-[#040b13] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),transparent_30%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.16),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.02fr_1.1fr] lg:px-10 lg:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex items-center gap-3 self-start rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" /> Available for selected projects
          </div>

          <h1 className="max-w-xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.1rem]">
            BUILDING DIGITAL EXPERIENCES <span className="text-cyan-300">BEYOND LIMITS.</span>
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-8 text-slate-300">
            I design and engineer immersive digital products, intelligent interfaces, and exceptional web experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-cyan-100">View My Work <ArrowRight size={16} /></a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-slate-900/60 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:border-cyan-400/40 hover:text-cyan-200">Let&apos;s Talk <ArrowUpRight size={16} /></a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-white/10 pt-6 text-slate-300">
            <div>
              <div className="text-2xl font-semibold tracking-[-0.06em] text-white">13</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-[-0.06em] text-white">10+</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">Technologies</div>
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-[-0.06em] text-white">100%</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">Commitment</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <HeroCityScene />
        </div>
      </div>
    </section>
  );
}

function HomeAbout() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
      <div className="mb-8 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
        <span>01 — A POINT OF VIEW</span>
        <span>About</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="max-w-md text-4xl font-semibold leading-none tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl">
            Technology is the medium.<br /> <span className="text-cyan-600">Feeling is the measure.</span>
          </h2>
        </div>

        <div className="space-y-5 text-slate-600">
          <p className="text-xl font-medium leading-relaxed text-slate-800">Good digital work does more than function. It creates a sense of clarity, curiosity, and connection.</p>
          <p className="text-[15px] leading-8">{profile.about}</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700 transition hover:text-cyan-500">A little more about the next project <ArrowUpRight size={15} /></a>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-slate-200 bg-slate-50 p-6">
            <div className="text-3xl font-semibold tracking-[-0.06em] text-slate-900">{stat.value}</div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeExpertise() {
  const iconMap = [Code2, Layers3, PenTool];

  return (
    <section id="expertise" className="border-y border-slate-200 bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500">
          <span>02 — THE TOOLKIT</span>
          <span>Expertise</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="max-w-md text-4xl font-semibold leading-none tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl">
              Tools for making<br /> <span className="text-cyan-600">the unseen tangible.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-8 text-slate-600">A considered toolkit for building expressive, useful, and reliable digital experiences.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {skills.map((category, index) => {
              const Icon = iconMap[index] ?? Sparkles;
              return (
                <motion.article
                  key={category.group}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_35px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-5 flex items-center justify-between text-slate-500">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">{category.index}</span>
                    <Icon size={19} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{category.group}</h3>
                  <ul className="mt-5 space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center justify-between gap-3 border-t border-slate-200 pt-3 text-sm text-slate-700">
                        <span>{item}</span>
                        <MoveRight size={14} className="text-cyan-600" />
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = activeFilter === "All"
    ? projectGallery
    : projectGallery.filter((project) => project.filter === activeFilter);

  return (
    <section id="projects" className="bg-[#f3f5f4] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500">
          <span>03 — SELECTED WORK</span>
          <span>Concept studies</span>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-lg text-4xl font-semibold leading-none tracking-[-0.05em] text-slate-900 sm:text-5xl">
            Ideas with<br /> <span className="text-cyan-600">their own gravity.</span>
          </h2>
          <p className="max-w-md text-sm leading-7 text-slate-600">A portfolio of 13 distinct experiences built to test creative direction, interaction quality, and product thinking across different industries.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
                activeFilter === filter
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_6px_35px_rgba(15,23,42,0.05)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{project.number}</span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500">{project.filter}</span>
              </div>

              <div className={`mt-5 rounded-[1.2rem] border p-4 ${project.theme.card} bg-gradient-to-br ${project.theme.ring} `}>
                <div className="h-32 rounded-xl border border-white/10 bg-slate-950/35 p-3">
                  <div className="flex h-full items-end justify-between rounded-lg border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.25),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.8),rgba(15,23,42,0.4))] p-3">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.24em] text-slate-300">{project.number}</div>
                      <div className="mt-1 text-lg font-semibold tracking-[-0.04em] text-white">{project.title}</div>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-slate-900">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2 text-[9px] uppercase tracking-[0.18em] text-slate-500">
                {project.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-800 transition group-hover:text-cyan-700">View Project <ArrowRight size={14} /></Link>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{project.category}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeExperience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
      <div className="mb-8 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500">
        <span>04 — THE JOURNEY</span>
        <span>In progress</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="max-w-md text-4xl font-semibold leading-none tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl">
            A practice,<br /> <span className="text-cyan-600">always becoming.</span>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-8 text-slate-600">Growth is not a straight line. It is the accumulation of questions worth following.</p>
        </div>

        <div className="space-y-5">
          {journey.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan-600">{item.period.split("/")[0].trim()}</div>
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  <span>{item.type}</span>
                  <span>{item.period}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p>
              </div>
              <ArrowUpRight size={16} className="mt-1 text-slate-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeProcess() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="border-y border-slate-200 bg-slate-100/80">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500">
          <span>05 — HOW I WORK</span>
          <span>Process</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="max-w-md text-4xl font-semibold leading-none tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl">
              From first question<br /> <span className="text-cyan-600">to final pixel.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-8 text-slate-600">A clear process creates room for better ideas and fewer surprises.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {process.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-2xl border p-5 text-left transition ${active === index ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white text-slate-800"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${active === index ? "text-slate-300" : "text-slate-500"}`}>{step.number}</span>
                  <ArrowDownRight size={16} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className={`mt-2 text-sm leading-7 ${active === index ? "text-slate-300" : "text-slate-600"}`}>{step.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeContact() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const message = Object.fromEntries(formData.entries());
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    setStatus("");

    if (endpoint) {
      setBusy(true);
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(message),
        });
        if (!response.ok) throw new Error("Submission failed");
        setStatus("Your message has been received. Thank you.");
        form.reset();
      } catch {
        setStatus("The message could not be delivered. Please use the email link instead.");
      } finally {
        setBusy(false);
      }
      return;
    }

    if (!profile.email) {
      setStatus("Contact email is not configured yet. Add it in src/data.js to enable email drafts.");
      return;
    }

    const subject = encodeURIComponent(`Project inquiry: ${message.projectType}`);
    const body = encodeURIComponent(`From: ${message.name} (${message.email})\n\n${message.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with a draft. The message has not been sent by this page.");
  }

  const socials = [
    profile.email ? { label: "Email", value: profile.email, href: `mailto:${profile.email}` } : null,
    profile.github ? { label: "GitHub", value: "View profile", href: profile.github } : null,
    profile.linkedin ? { label: "LinkedIn", value: "Connect", href: profile.linkedin } : null,
    profile.telegram ? { label: "Telegram", value: "Send a message", href: profile.telegram } : null,
  ].filter(Boolean);

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
      <div className="mb-8 flex items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500">
        <span>06 — START A CONVERSATION</span>
        <span>Contact</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">
        <div>
          <h2 className="max-w-xl text-4xl font-semibold leading-none tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl">
            HAVE AN IDEA? LET&apos;S BUILD SOMETHING EXTRAORDINARY.
          </h2>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm text-slate-700">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Name</span>
                <input name="name" autoComplete="name" required maxLength={100} placeholder="Your name" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500" />
              </label>

              <label className="block text-sm text-slate-700">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Email</span>
                <input name="email" type="email" autoComplete="email" required maxLength={160} placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500" />
              </label>
            </div>

            <label className="block text-sm text-slate-700">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Project type</span>
              <select name="projectType" defaultValue="" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500">
                <option value="" disabled>Select a direction</option>
                <option>Digital product</option>
                <option>Creative development</option>
                <option>Interactive 3D</option>
                <option>Something else</option>
              </select>
            </label>

            <label className="block text-sm text-slate-700">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Message</span>
              <textarea name="message" required minLength={10} maxLength={3000} rows={5} placeholder="A little about the idea, timeline, or what success looks like..." className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500" />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" disabled={busy} className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60">
                {busy ? "Sending..." : "Send Message"} <ArrowUpRight size={15} />
              </button>
              <span className="text-sm text-slate-500">Typically replies within two working days.</span>
            </div>

            <p role="status" aria-live="polite" className="min-h-[24px] text-sm text-slate-700">{status}</p>
          </form>
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
          <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Elsewhere</div>
          <div className="space-y-3">
            {socials.length ? socials.map(({ label, value, href }) => (
              <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noreferrer"} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3 text-left transition hover:border-cyan-400/40">
                <div className="flex items-center gap-3">
                  {label === "Email" && <Mail size={16} className="text-cyan-600" />}
                  {label === "GitHub" && <Globe size={16} className="text-cyan-600" />}
                  {label === "LinkedIn" && <Briefcase size={16} className="text-cyan-600" />}
                  {label === "Telegram" && <Send size={16} className="text-cyan-600" />}
                  <span>
                    <span className="block text-lg font-semibold text-slate-900">{label}</span>
                    <span className="block text-xs text-slate-500">{value}</span>
                  </span>
                </div>
                <ArrowUpRight size={15} className="text-cyan-600" />
              </a>
            )) : <p className="text-sm text-slate-600">Social links appear here when contact details are added to your profile settings.</p>}
          </div>

          <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Open to selected collaborations
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function PortfolioHome() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <NavBar />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeExpertise />
        <HomeProjects />
        <HomeExperience />
        <HomeProcess />
        <HomeContact />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:px-8 lg:px-10">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top" className="inline-flex items-center gap-2 text-slate-700 transition hover:text-cyan-700">Back to top <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </div>
  );
}
