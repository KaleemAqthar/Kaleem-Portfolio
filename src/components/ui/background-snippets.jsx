export default function PortfolioBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0d0d0d]">
      <div
        className={[
          "pointer-events-none absolute inset-0",

          "bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]",

          "bg-[size:30px_30px]",

          "[mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_70%,transparent_110%)]",

          "[-webkit-mask-image:radial-gradient(ellipse_80%_55%_at_50%_0%,#000_70%,transparent_110%)]",
        ].join(" ")}
      />
    </div>
  );
}