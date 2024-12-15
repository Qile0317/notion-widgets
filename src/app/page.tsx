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
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="bg-gray-800 text-white py-12 text-center">
        <h1 className="text-4xl font-semibold">Notion Widget Gallery</h1>
        <p className="mt-2 text-lg">A collection of functional and customizable widgets.</p>
      </header>

      <div className="flex flex-wrap justify-center gap-8 p-8">
        {widgets.map((widget) => {
          const formattedTitle = widget
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <div
              key={widget}
              className="w-72 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{formattedTitle}</h3>
                <Link
                  href={`/widgets/${widget}`}
                  className="mt-4 text-blue-600 hover:text-blue-800 underline"
                >
                  View Widget
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
