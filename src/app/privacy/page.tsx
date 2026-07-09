import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="w-full py-16 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto flex flex-col gap-12">
        {/* Page Header */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <span className="font-utility-mono text-sm text-matatu-pink uppercase tracking-widest font-bold">
            LEGAL STUFF
          </span>
          <h1 className="font-display-xl text-display-xl inline-block bg-nairobi-lime text-zine-ink px-6 py-3 brutalist-border rotate-m-1 w-fit self-center md:self-start">
            PRIVACY POLICY
          </h1>
          <p className="font-utility-mono text-sm text-zinc-500 mt-2">
            Last Updated: July 9, 2026
          </p>
        </div>

        {/* Introduction Banner */}
        <div className="bg-white p-8 brutalist-border brutalist-shadow">
          <p className="font-body-lg text-lg leading-relaxed">
            Welcome to <strong>Vaibuu</strong> (referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). 
            We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you play our mobile game, visit our website, or use our services. By using Vaibuu, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-8 font-body-lg">
          {/* Section 1 */}
          <div className="bg-white p-8 brutalist-border brutalist-shadow flex flex-col gap-4">
            <h2 className="font-display-lg text-2xl text-zine-ink flex items-center gap-3">
              <span className="bg-matatu-pink text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-zine-ink shadow-[2px_2px_0px_rgba(20,17,15,1)]">
                1
              </span>
              Information We Collect
            </h2>
            <div className="text-zinc-700 space-y-4 leading-relaxed">
              <p>
                We try to keep data collection to a absolute minimum so you can focus on acting out sheng words and having fun. However, we collect a few things to make the game work:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-zine-ink">Device Information:</strong> We collect info like device model, operating system version, and unique device identifiers to optimize the tilt-sensor gameplay and track app performance.
                </li>
                <li>
                  <strong className="text-zine-ink">Gameplay Data:</strong> Scores, categories played, and custom voting data (if you participate in our live community voting for new sheng slang terms).
                </li>
                <li>
                  <strong className="text-zine-ink">Purchase History:</strong> If you unlock premium cards/packs, the transaction is processed securely through the Google Play Store or Apple App Store. We do <strong>not</strong> collect or store your M-Pesa details or credit card information.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-8 brutalist-border brutalist-shadow flex flex-col gap-4">
            <h2 className="font-display-lg text-2xl text-zine-ink flex items-center gap-3">
              <span className="bg-sheng-violet text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-zine-ink shadow-[2px_2px_0px_rgba(20,17,15,1)]">
                2
              </span>
              How We Use Your Data
            </h2>
            <div className="text-zinc-700 space-y-4 leading-relaxed">
              <p>
                We use the gathered information to run and improve the Vaibuu experience:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To synchronize live leaderboard positions and community votes for new terms.</li>
                <li>To troubleshoot gameplay bugs, sensor calibration issues, and lag.</li>
                <li>To verify and activate your unlocked premium card packs.</li>
                <li>To understand which categories (like Matatu Slang or Kenyan Celebs) are the most popular so we can curate better content.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-8 brutalist-border brutalist-shadow flex flex-col gap-4">
            <h2 className="font-display-lg text-2xl text-zine-ink flex items-center gap-3">
              <span className="bg-boda-yellow text-zine-ink w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-zine-ink shadow-[2px_2px_0px_rgba(20,17,15,1)]">
                3
              </span>
              Third-Party Services
            </h2>
            <div className="text-zinc-700 space-y-4 leading-relaxed">
              <p>
                We use third-party services that may collect information used to identify you. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-zine-ink">Google Play Services / Apple App Store:</strong> For handling downloads, purchases, and core game engine services.</li>
                <li><strong className="text-zine-ink">Firebase Analytics:</strong> To analyze user interaction and app crashes.</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white p-8 brutalist-border brutalist-shadow flex flex-col gap-4">
            <h2 className="font-display-lg text-2xl text-zine-ink flex items-center gap-3">
              <span className="bg-nairobi-lime text-zine-ink w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-zine-ink shadow-[2px_2px_0px_rgba(20,17,15,1)]">
                4
              </span>
              Security
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              We value your trust in providing us your information. We implement industry-standard security practices to protect your data. However, remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white p-8 brutalist-border brutalist-shadow flex flex-col gap-4">
            <h2 className="font-display-lg text-2xl text-zine-ink flex items-center gap-3">
              <span className="bg-zinc-300 text-zine-ink w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-zine-ink shadow-[2px_2px_0px_rgba(20,17,15,1)]">
                5
              </span>
              Contact Us
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us:
            </p>
            <div className="bg-zine-paper p-4 brutalist-border font-utility-mono text-sm space-y-1">
              <p><strong>Email:</strong> <a href="mailto:hello@vaibuu.co.ke" className="text-sheng-violet hover:underline">hello@vaibuu.co.ke</a> / <a href="mailto:hakheem.dev@gmail.com" className="text-sheng-violet hover:underline">hakheem.dev@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+254769403162" className="text-sheng-violet hover:underline">+254 769 403 162</a></p>
              <p><strong>Nairobi, Kenya</strong></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
