import fs from "fs";
import path from "path";
import ImageWithFallback from "@/components/ImageWithFallback";

export const revalidate = 0;

export default async function Page() {
  const base = path.resolve(process.cwd(), "scaffold-tmp/old-site");
  const files = [
    "home.md",
    "about-us.md",
    "professional-services.md",
    "hospitality-services.md",
    "business-development.md",
    "logistics-services.md",
    "transportation-solutions.md",
    "contact-us.md",
    "blog.md",
  ];

  const contents: Record<string, string> = {};
  for (const f of files) {
    try {
      const p = path.join(base, f);
      contents[f] = await fs.promises.readFile(p, "utf8");
    } catch (e) {
      contents[f] = "(not available)";
    }
  }

  let urls: string[] = [];
  try {
    const u = path.join(base, "urls.json");
    urls = JSON.parse(await fs.promises.readFile(u, "utf8"));
  } catch (e) {
    urls = [];
  }

  return (
    <div className="min-h-screen bg-[#0B0D10] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <header className="mb-12">
          <h1 className="text-4xl font-bold">ICL — Archived Content Preview</h1>
          <p className="mt-3 text-lg text-white/70">Imported summaries from the old WordPress site. Review before reuse.</p>
        </header>

        <section className="mb-12 rounded-xl bg-[#161920] p-8">
          <h2 className="text-2xl font-semibold mb-4">Live Preview Hero (Dark)</h2>
          <p className="text-white/80 mb-6">This is a minimal hero preview implementing the design tokens from the project plan.</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold">International Coverage Logistic</h3>
              <p className="mt-2 text-white/70">Multi-industry holding group — transportation, logistics, hospitality, and business development.</p>
            </div>
            <div>
              <a href="/contact" className="inline-block rounded-md bg-amber-500 px-6 py-3 font-semibold text-black">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Partner Logos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {urls.length === 0 && <div className="text-white/60">No assets listed yet. Run <code>node scripts/download-assets.js</code> to download into <code>public/old-assets/</code>.</div>}
            {urls.map((u) => {
              const name = u.split("/").pop();
              const local = `/old-assets/${name}`;
              return (
                <div key={u} className="rounded bg-[#0f1720] p-3 flex items-center justify-center">
                      <ImageWithFallback src={local} fallback={u} alt={name} className="max-h-20 object-contain" />
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid gap-8">
          {Object.entries(contents).map(([file, txt]) => (
            <article key={file} className="rounded-xl bg-[#0f1720] p-6">
              <h3 className="font-semibold text-xl mb-2">{file.replace(/[-.]/g, " ")}</h3>
              <pre className="whitespace-pre-wrap text-sm text-white/80">{txt}</pre>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
