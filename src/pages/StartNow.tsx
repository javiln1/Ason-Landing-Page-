import { useEffect, useRef } from "react";
import Layout from "@/components/layout/Layout";
import { useUTM } from "@/hooks/useUTM";

const TYPEFORM_ID = "waw3Nx7c";

const StartNow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { getUTMQueryString } = useUTM();

  useEffect(() => {
    if (!containerRef.current) return;

    const utmParams = getUTMQueryString();
    const typeformUrl = `https://form.typeform.com/to/${TYPEFORM_ID}${utmParams ? `?${utmParams}` : ""}`;

    // Clear any previous content
    containerRef.current.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src = typeformUrl;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.allow = "camera; microphone; autoplay; encrypted-media;";
    iframe.title = "Application Form";

    containerRef.current.appendChild(iframe);
  }, [getUTMQueryString]);

  return (
    <Layout>
      <section className="pt-20 md:pt-24 min-h-screen flex flex-col">
        <div
          ref={containerRef}
          className="flex-1 w-full"
          style={{ minHeight: "calc(100vh - 5rem)" }}
        />
      </section>
    </Layout>
  );
};

export default StartNow;
