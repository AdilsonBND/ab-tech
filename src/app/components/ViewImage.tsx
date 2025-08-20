import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";

export type ViewImageModalRef = {
  open: (src: string, fullSrc?: string, alt?: string) => void;
  close: () => void;
};

export default forwardRef<ViewImageModalRef, { src?: string; fullSrc?: string; alt?: string }>(
  function ViewImageModal({ src, fullSrc, alt = "Image" }, ref) {
    const [open, setOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState(src);
    const [imgFull, setImgFull] = useState(fullSrc ?? src);
    const [imgAlt, setImgAlt] = useState(alt);

    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useImperativeHandle(ref, () => ({
      open: (s, f, a) => {
        setImgSrc(s);
        setImgFull(f ?? s);
        setImgAlt(a ?? "Image");
        setOpen(true);
      },
      close: () => setOpen(false),
    }));

    useEffect(() => {
      const d = dialogRef.current;
      if (!d) return;
      open ? d.showModal() : d.close();
    }, [open]);

    useEffect(() => {
      const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
      <dialog
        ref={dialogRef}
        className="rounded-xl p-0 backdrop:bg-black/60"
        onClick={(e) => {
          const rect = (e.target as HTMLDialogElement).getBoundingClientRect();
          const outside = e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
          if (outside) setOpen(false);
        }}
      >
        <button
          onClick={() => setOpen(false)}
          className="fixed top-4 right-5 bg-white rounded-full font-bold px-3 py-1"
          aria-label="Fechar"
        >
          ✕
        </button>
        <img
          src={imgFull ?? imgSrc}
          alt={imgAlt}
          className="max-w-[90vw] max-h-[85vh] rounded-2xl border-4 border-white shadow-2xl"
        />
      </dialog>
    );
  }
);
