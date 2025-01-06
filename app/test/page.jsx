"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import {
  Menu,
  User,
  GraduationCap,
  X,
  ChevronDown,
  ChevronUp,
  Search,
  ShoppingBasket,
} from "lucide-react";

// Lazy load Typewriter component
const Typewriter = dynamic(() => import("../components/Typewriter"), {
  ssr: false, // Disable server-side rendering for this component
});

const page = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleType = (count) => {
    // access word count number
    // //console.log(count)
  };

  const handleDone = () => {
    if (process.env.NODE_ENV === "development") {
      //console.log(`Done after 5 loops!`);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onloadeddata = () => {
        setVideoLoaded(true);
      };
    }
  }, []);

  return (
    <div>
      <section className="h-[70vh] overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 homeVideo h-[72vh]"
          preload="metadata"
        >
          <source src="/assets/videos/college1-crop.mp4" type="video/mp4" />
        </video>
        <div className="h-full flex justify-center items-center bg-black/40">
          <div className="lg:w-[40vw] md:w-[70vw] max-sm:w-[80vw]">
            <h1
              className="text-white text-4xl max-sm:text-lg"
              style={{
                paddingTop: "3.5rem",
                margin: "auto 0",
                fontWeight: "bold",
              }}
            >
              Find Over{" "}
              <span style={{ color: "#00f1ff", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "3500+ Colleges in India",
                    "500+ Exams in India",
                    "1100+ Exams in India",
                    "1 Lakh Reviews in India!",
                  ]}
                  loop={9}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={800}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
            <div className="mt-3 relative">
              <input
                type="text"
                placeholder="Search for Colleges, Exmas, News and more..."
                className="rounded-full py-3 px-4 outline-none w-full text-black max-sm:text-sm"
              />
              <button className="bg-second text-white p-2 rounded-full absolute right-2 top-2">
                <Search />
              </button>
            </div>
          </div>
        </div>
      </section>
      <p>
        Wikipedia[c] is a free-content online encyclopedia written and
        maintained by a community of volunteers, known as Wikipedians, through
        open collaboration and the wiki software MediaWiki. Wikipedia is the
        largest and most-read reference work in history,[3][4] and is
        consistently ranked among the ten most visited websites; as of August
        2024, it was ranked fourth by Semrush,[5] and seventh by Similarweb.[6]
        Founded by Jimmy Wales and Larry Sanger on January 15, 2001, Wikipedia
        has been hosted since 2003 by the Wikimedia Foundation, an American
        nonprofit organization funded mainly by donations from readers.[7]
        Initially only available in English, Wikipedia now exists in more than
        300 languages. The English Wikipedia, with its over 6.9 million
        articles, remains the largest of the editions, which together comprise
        more than 64 million articles and attract more than 1.5 billion unique
        device visits and 13 million edits per month (about 5 edits per second
        on average) as of April 2024.[W 1] As of November 2024, over 25% of
        Wikipedia's traffic was from the United States, followed by Japan at
        6.2%, the United Kingdom at 5.6%, Russia at 5.0%, Germany at 4.8%, and
        the remaining 53.3% split among other countries.[8] Wikipedia has been
        praised for its enablement of the democratization of knowledge, extent
        of coverage, unique structure, and culture. Wikipedia has been censored
        by some national governments, ranging from specific pages to the entire
        site.[9][10] Although Wikipedia's volunteer editors have written
        extensively on a wide variety of topics, the encyclopedia has been
        criticized for systemic bias, such as a gender bias against women and
        geographical bias against the Global South (Eurocentrism).[11][12] While
        the reliability of Wikipedia was frequently criticized in the 2000s, it
        has improved over time, receiving greater praise from the late 2010s
        onward[3][13][14] while becoming an important fact-checking
        site.[15][16] Articles on breaking news are often accessed as sources
        for frequently updated information about those events.[17][18] History
        Main article: History of Wikipedia Nupedia Main article: Nupedia
        Wikipedia founders Jimmy Wales (left) and Larry Sanger (right) Various
        collaborative online encyclopedias were attempted before the start of
        Wikipedia, but with limited success.[19] Wikipedia began as a
        complementary project for Nupedia, a free online English-language
        encyclopedia project whose articles were written by experts and reviewed
        under a formal process.[20] It was founded on March 9, 2000, under the
        ownership of Bomis, a web portal company. Its main figures were Bomis
        CEO Jimmy Wales and Larry Sanger, editor-in-chief for Nupedia and later
        Wikipedia.[1][21] Nupedia was initially licensed under its own Nupedia
        Open Content License, but before Wikipedia was founded, Nupedia switched
        to the GNU Free Documentation License at the urging of Richard
        Stallman.[W 2] Wales is credited with defining the goal of making a
        publicly editable encyclopedia,[22][W 3] while Sanger is credited with
        the strategy of using a wiki to reach that goal.[W 4] On January 10,
        2001, Sanger proposed on the Nupedia mailing list to create a wiki as a
        "feeder" project for Nupedia.[W 5] Launch and growth Wikipedia was
        launched on January 15, 2001[20] (referred to as Wikipedia Day) as a
        single English-language edition at www.wikipedia.com,[W 6] and was
        announced by Sanger on the Nupedia mailing list.[22] The name originated
        from a blend of the words wiki and encyclopedia.[23][24] Its integral
        policy of "neutral point-of-view"[W 7] was codified in its first few
        months. Otherwise, there were initially relatively few rules, and it
        operated independently of Nupedia.[22] Bomis originally intended for it
        to be a for-profit business.[25] The Wikipedia home page on December 20,
        2001[d] Wikipedia gained early contributors from Nupedia, Slashdot
        postings, and web search engine indexing. Language editions were created
        beginning in March 2001, with a total of 161 in use by the end of
        2004.[W 8][W 9] Nupedia and Wikipedia coexisted until the former's
        servers were taken down permanently in 2003, and its text was
        incorporated into Wikipedia. The English Wikipedia passed the mark of 2
        million articles on September 9, 2007, making it the largest
        encyclopedia ever assembled, surpassing the Yongle Encyclopedia made in
        China during the Ming dynasty in 1408, which had held the record for
        almost 600 years.[26] Citing fears of commercial advertising and lack of
        control, users of the Spanish Wikipedia forked from Wikipedia to create
        Enciclopedia Libre in February 2002.[W 10] Wales then announced that
        Wikipedia would not display advertisements, and changed Wikipedia's
        domain from wikipedia.com to wikipedia.org.[27][W 11] After an early
        period of exponential growth,[28] the growth rate of the English
        Wikipedia in terms of the numbers of new articles and of editors,
        appears to have peaked around early 2007.[29] The edition reached 3
        million articles in August 2009. Around 1,800 articles were added daily
        to the encyclopedia in 2006; by 2013 that average was roughly 800.[W 12]
        A team at the Palo Alto Research Center attributed this slowing of
        growth to "increased coordination and overhead costs, exclusion of
        newcomers, and resistance to new edits".[28] Others suggest that the
        growth is flattening naturally because articles that could be called
        "low-hanging fruit"—topics that clearly merit an article—have already
        been created and built up extensively.[30][31][32] In November 2009, a
        researcher at the Rey Juan Carlos University in Madrid, Spain found that
        the English Wikipedia had lost 49,000 editors during the first three
        months of 2009; in comparison, it lost only 4,900 editors during the
        same period in 2008.[33][34] The Wall Street Journal cited the array of
        rules applied to editing and disputes related to such content among the
        reasons for this trend.[35] Wales disputed these claims in 2009, denying
        the decline and questioning the study's methodology.[36] Two years
        later, in 2011, he acknowledged a slight decline, noting a decrease from
        "a little more than 36,000 writers" in June 2010 to 35,800 in June 2011.
        In the same interview, he also claimed the number of editors was "stable
        and sustainable".[37] A 2013 MIT Technology Review article, "The Decline
        of Wikipedia", questioned this claim, reporting that since 2007
        Wikipedia had lost a third of its volunteer editors, and suggesting that
        those remaining had focused increasingly on minutiae.[38] In July 2012,
        The Atlantic reported that the number of administrators was also in
        decline.[39] In the November 25, 2013, issue of New York magazine,
        Katherine Ward stated, "Wikipedia, the sixth-most-used website, is
        facing an internal crisis."[40] The number of active English Wikipedia
        editors has since remained steady after a long period of
        decline.[41][42] Milestones Cartogram showing number of articles in each
        language as of March 2024. Languages with fewer than 1,000,000 articles
        are represented by one circle. Languages are grouped by region of
        continent and each region of continent is presented by a separate color.
        In January 2007, Wikipedia first became one of the ten most popular
        websites in the United States, according to Comscore Networks.[43] With
        42.9 million unique visitors, it was ranked #9, surpassing The New York
        Times (#10) and Apple (#11).[43] This marked a significant increase over
        January 2006, when Wikipedia ranked 33rd, with around 18.3 million
        unique visitors.[44] In 2014, it received 8 billion page views every
        month.[W 13] On February 9, 2014, The New York Times reported that
        Wikipedia had 18 billion page views and nearly 500 million unique
        visitors a month, "according to the ratings firm comScore".[45] As of
        March 2023, it ranked 6th in popularity, according to Similarweb.[46]
        Loveland and Reagle argue that, in process, Wikipedia follows a long
        tradition of historical encyclopedias that have accumulated improvements
        piecemeal through "stigmergic accumulation".[47][48] On January 18,
        2012, the English Wikipedia participated in a series of coordinated
        protests against two proposed laws in the United States Congress—the
        Stop Online Piracy Act (SOPA) and the PROTECT IP Act (PIPA)—by blacking
        out its pages for 24 hours.[49] More than 162 million people viewed the
        blackout explanation page that temporarily repla
      </p>
    </div>
  );
};

export default page;
