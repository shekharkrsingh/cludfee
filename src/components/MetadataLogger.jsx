import { useEffect } from 'react';

const MetadataLogger = () => {
  useEffect(() => {
    const LAST_LOG_KEY = 'lastMetadataLog';

    const shouldLog = () => {
      const lastLog = localStorage.getItem(LAST_LOG_KEY);
      if (!lastLog) return true;
      const oneWeek = 7 * 24 * 60 * 60 * 1000;
      return (Date.now() - parseInt(lastLog, 10)) > oneWeek;
    };

    const getMetadata = async () => {
      const metadata = {};

      // Basic Browser Info
      metadata.userAgent = navigator.userAgent;
      metadata.platform = navigator.platform;
      metadata.language = navigator.language;
      metadata.languages = navigator.languages.join(',');
      metadata.cookieEnabled = navigator.cookieEnabled;
      metadata.doNotTrack = navigator.doNotTrack;

      // Screen Info
      metadata.screenWidth = window.screen.width;
      metadata.screenHeight = window.screen.height;
      metadata.innerWidth = window.innerWidth;
      metadata.innerHeight = window.innerHeight;
      metadata.devicePixelRatio = window.devicePixelRatio;

      // Hardware Info
      metadata.hardwareConcurrency = navigator.hardwareConcurrency || 'unknown';
      metadata.deviceMemory = navigator.deviceMemory || 'unknown';
      metadata.touchSupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

      // Network Info
      if (navigator.connection) {
        metadata.networkType = navigator.connection.effectiveType;
        metadata.downlink = navigator.connection.downlink;
        metadata.rtt = navigator.connection.rtt;
      }

      // Timezone & Time
      metadata.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      metadata.localTime = new Date().toString();

      // Page Info
      metadata.referrer = document.referrer;
      metadata.pageURL = window.location.href;

      // IP Lookup
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const ipData = await res.json();
          metadata.ip = ipData.ip;
          metadata.city = ipData.city;
          metadata.region = ipData.region;
          metadata.country = ipData.country_name;
          metadata.org = ipData.org;
        } else {
          metadata.ipLookupError = `Failed to fetch IP info: status ${res.status}`;
        }
      } catch (err) {
        metadata.ipLookupError = err.message;
      }

      return metadata;
    };

    const logMetadata = async () => {
      const metadata = await getMetadata();

      // Pretty string version (no URL encoding)
      const prettyString = JSON.stringify(metadata, null, 2);

      const payload = {
        log: prettyString,
      };

      try {
        await fetch('https://cludfee.onrender.com/mail/log', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        
      }

      localStorage.setItem(LAST_LOG_KEY, Date.now().toString());
    };

    if (shouldLog()) {
      logMetadata();
    }
  }, []);

  return null;
};

export default MetadataLogger;
