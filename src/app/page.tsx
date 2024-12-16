import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import CopyButton from "../components/CopyButton";

// Function to scan widgets directory
const getWidgets = () => {
  const widgetsDir = path.join(process.cwd(), "src/app/widgets");
  const widgetFolders = fs
    .readdirSync(widgetsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return widgetFolders;
};

export default function HomePage() {
  const widgets = getWidgets();
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

          const WidgetComponent = dynamic(() =>
            import(`./widgets/${widget}/page`).then((mod) => mod.default)
          );

          return (
            <div
              key={widget}
              className="w-72 h-80 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
              <div className="flex flex-col h-full p-6">
                <h3 className="text-xl font-semibold text-gray-800 text-center">{formattedTitle}</h3>
                <div className="mt-4 flex-grow overflow-auto border border-gray-300 rounded-lg shadow-sm p-4">
                  <WidgetComponent />
                </div>
                <div className="flex justify-center mt-auto">
                  <CopyButton href={`/widgets/${widget}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
