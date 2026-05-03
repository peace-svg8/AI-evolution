export default function Footer() {
  return (
    <footer className="py-20 px-6 md:px-[120px] bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-xl font-bold tracking-tighter">LOGOIPSUM</div>
          <p className="text-xs text-white/40 tracking-wider font-medium uppercase">
            © 2026 AI Evolution & Adoption. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Resources</span>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">API Reference</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Social</span>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
