import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="w-full py-16 px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto flex flex-col gap-12">
        {/* Page Header */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <span className="font-utility-mono text-sm text-matatu-pink uppercase tracking-widest font-bold">
            THE RULES OF PLAY
          </span>
          <h1 className="font-display-xl text-display-xl inline-block bg-boda-yellow text-zine-ink px-6 py-3 brutalist-border rotate-p-1 w-fit self-center md:self-start">
            TERMS OF SERVICE
          </h1>
          <p className="font-utility-mono text-sm text-zinc-500 mt-2">
            Last Updated: July 9, 2026
          </p>
        </div>

        {/* Introduction Banner */}
        <div className="bg-white p-8 brutalist-border brutalist-shadow">
          <p className="font-body-lg text-lg leading-relaxed">
            Welcome to <strong>Vaibuu</strong>! These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Vaibuu mobile application, website, and related services. Please read them carefully before using our services. By using Vaibuu, you agree to be bound by these Terms.
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
              Acceptance and Eligibility
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              By installing and playing Vaibuu, you confirm that you are at least 13 years old (or have parental/guardian consent if you are younger). If you do not agree to these Terms, please do not download, access, or use Vaibuu.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white p-8 brutalist-border brutalist-shadow flex flex-col gap-4">
            <h2 className="font-display-lg text-2xl text-zine-ink flex items-center gap-3">
              <span className="bg-sheng-violet text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-zine-ink shadow-[2px_2px_0px_rgba(20,17,15,1)]">
                2
              </span>
              In-App Purchases and Billing
            </h2>
            <div className="text-zinc-700 space-y-4 leading-relaxed">
              <p>
                Vaibuu offers free card decks as well as premium expansion packs (e.g. &quot;Nairobi Nights&quot;, &quot;TikTok Trends&quot;) which must be unlocked with a payment.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payments are processed securely via Apple App Store or Google Play Store (including native integrations like M-Pesa on Android Google Play in Kenya).</li>
                <li>All purchases are final, non-refundable, and non-transferable, unless required by local consumer law.</li>
                <li>We reserve the right to change prices for premium card packs at any time.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white p-8 brutalist-border brutalist-shadow flex flex-col gap-4">
            <h2 className="font-display-lg text-2xl text-zine-ink flex items-center gap-3">
              <span className="bg-nairobi-lime text-zine-ink w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-zine-ink shadow-[2px_2px_0px_rgba(20,17,15,1)]">
                3
              </span>
              Community Voting and Slang Submissions
            </h2>
            <div className="text-zinc-700 space-y-4 leading-relaxed">
              <p>
                When you vote for new Sheng slang words or submit category suggestions, you agree to the following guidelines:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You will not submit any terms that are hate speech, discriminatory, threatening, or excessively offensive.</li>
                <li>By submitting or voting on a word, you grant Vaibuu a perpetual, royalty-free, worldwide license to use, display, and publish the word or category in our games without attribution or compensation.</li>
                <li>We reserve the right to remove, edit, or reject any user submissions at our sole discretion.</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white p-8 brutalist-border brutalist-shadow flex flex-col gap-4">
            <h2 className="font-display-lg text-2xl text-zine-ink flex items-center gap-3">
              <span className="bg-boda-yellow text-zine-ink w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-zine-ink shadow-[2px_2px_0px_rgba(20,17,15,1)]">
                4
              </span>
              Enthusiastic Play Disclaimer
            </h2>
            <div className="bg-zinc-100 p-6 border-l-4 border-matatu-pink space-y-3">
              <p className="font-bold text-zine-ink uppercase tracking-wide">
                ⚠️ IMPORTANT SAFETY WARNING
              </p>
              <p className="text-zinc-700 leading-relaxed text-sm">
                Vaibuu is an active social party game. While acting out words like &quot;Matatu conductor&quot;, &quot;Boda boda rider&quot;, or &quot;Kipchoge sprinting&quot;, you might move around aggressively. 
              </p>
              <p className="text-zinc-700 leading-relaxed text-sm">
                We are <strong>NOT</strong> liable for any broken phones from screen drops, property damage, or physical injuries (such as bumping into your friends or furniture) that occur during gameplay. Play responsibly, hold your phone tight, and clear the room before you start tilting!
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white p-8 brutalist-border brutalist-shadow flex flex-col gap-4">
            <h2 className="font-display-lg text-2xl text-zine-ink flex items-center gap-3">
              <span className="bg-zinc-300 text-zine-ink w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-zine-ink shadow-[2px_2px_0px_rgba(20,17,15,1)]">
                5
              </span>
              Intellectual Property
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              All branding, custom illustrations, design elements, source code, game concept, and curated card database contents of Vaibuu are the exclusive property of Vaibuu. You may not copy, reverse engineer, distribute, or create derivative works of any part of our app without our express written permission.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-white p-8 brutalist-border brutalist-shadow flex flex-col gap-4">
            <h2 className="font-display-lg text-2xl text-zine-ink flex items-center gap-3">
              <span className="bg-zine-ink text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-zine-ink shadow-[2px_2px_0px_rgba(20,17,15,1)]">
                6
              </span>
              Governing Law
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              These Terms of Service and any separate agreements shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising out of these Terms shall be resolved in the competent courts of Nairobi, Kenya.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-white p-8 brutalist-border brutalist-shadow flex flex-col gap-4">
            <h2 className="font-display-lg text-2xl text-zine-ink flex items-center gap-3">
              <span className="bg-zinc-100 text-zine-ink w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg border-2 border-zine-ink shadow-[2px_2px_0px_rgba(20,17,15,1)]">
                7
              </span>
              Contact Info
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              For any questions regarding these Terms, you can reach our team at:
            </p>
            <div className="bg-zine-paper p-4 brutalist-border font-utility-mono text-sm space-y-1">
              <p><strong>Email:</strong> <a href="mailto:hello@vaibuu.co.ke" className="text-sheng-violet hover:underline">hello@vaibuu.co.ke</a> / <a href="mailto:hakheem.dev@gmail.com" className="text-sheng-violet hover:underline">hakheem.dev@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+254769403162" className="text-sheng-violet hover:underline">+254 769 403 162</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
