import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import Link from "next/link";

// Function to scan widgets directory
const getWidgets = () => {
  const widgetsDir = path.join(process.cwd(), "src/app/widgets");
  const widgetFolders = fs
    .readdirSync(widgetsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory()) // Ensure we're only getting directories
    .map((entry) => entry.name); // Get the directory names (widget names)
  return widgetFolders;
};

export default function HomePage() {
  const widgets = getWidgets(); // Get the list of widgets
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <header className="bg-gray-800 text-white py-12 text-center">
        <h1 className="text-4xl font-semibold">Notion Widget Gallery</h1>
        <p className="mt-2 text-lg">A collection of functional and customizable widgets.</p>
        <p className="mt-4 text-sm text-gray-400">
          You can change the theme using the URL parameter: <code>?theme=light</code> or <code>?theme=dark</code>.
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-8 p-8">
        {widgets.map((widget) => {
          const formattedTitle = widget
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          // Dynamically import the widget component at build time
          const WidgetComponent = dynamic(() =>
            import(`./widgets/${widget}/page`).then((mod) => mod.default)
          );

          return (
            <div
              key={widget}
              className="w-72 h-80 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              <div className="flex flex-col justify-between h-full p-6">
                <h3 className="text-xl font-semibold text-gray-800">{formattedTitle}</h3>
                <div className="mt-4 flex-grow overflow-auto">
                  <WidgetComponent />
                </div>
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
