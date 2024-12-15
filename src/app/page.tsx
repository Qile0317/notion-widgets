import fs from "fs";
import path from "path";
import Link from "next/link";

export default function HomePage() {
  const widgetsDir = path.join(process.cwd(), "src/app/widgets");
  const widgets = fs
    .readdirSync(widgetsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  return (
    <div>
      <header style={{ background: "#f5f5f5", padding: "20px", textAlign: "center" }}>
        <h1>Notion Widget Gallery</h1>
      </header>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px" }}>
        {widgets.map((widget) => (
          <div key={widget} style={{ border: "1px solid #ddd", padding: "10px", width: "200px" }}>
            <h3>{widget.charAt(0).toUpperCase() + widget.slice(1)}</h3>
            <p>Explore the {widget} widget.</p>
            <Link href={`/widgets/${widget}`} style={{ color: "blue", textDecoration: "underline" }}>
              View Widget
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
