export default function VisualBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(100, 150, 255, 0.03) 0%,
              rgba(0, 0, 0, 1) 80%
            ),
            radial-gradient(
              ellipse at 50% 10%, 
              rgba(80, 120, 255, 0.1) 0%, 
              rgba(0, 0, 0, 0) 70%
            )
          `,
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 50%, 
              rgba(20, 30, 50, 0.3) 0%, 
              rgba(0, 0, 5, 1) 100%
            )
          `,
        }}
      />
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(
              circle at 50% 100%, 
              rgba(10, 15, 30, 0.8) 0%, 
              rgba(0, 0, 10, 1) 100%
            )
          `,
        }}
      />
    </div>
  );
}