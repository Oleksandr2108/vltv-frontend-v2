/* eslint-disable react/prop-types */
import useHover from '@/hooks/useHover';
import { FacebookIcon } from '@/Icons/FacebookIcon';
import { InstagramIcon } from '@/Icons/InstagramIcon';
import { TikTokIcon } from '@/Icons/TikTokIcon';
import { YouTubeIcon } from '@/Icons/YouTubeIcon';
import { useEffect, useState } from 'react';

export const LinksSocialNetwork = ({ isTwoColumn }) => {
  const [sizeWindow, setSizeWindow] = useState(null);

  const {
    handleMouseEnter: handleInstagramEnter,
    handleMouseLeave: handleInstagramLeave,
    isHovered: isInstagramHovered,
  } = useHover();
  const {
    handleMouseEnter: handleFacebookEnter,
    handleMouseLeave: handleFacebookLeave,
    isHovered: isFacebookHovered,
  } = useHover();
  const {
    handleMouseEnter: handleTikTokEnter,
    handleMouseLeave: handleTikTokLeave,
    isHovered: isTikTokHovered,
  } = useHover();
  const {
    handleMouseEnter: handleYouTubeEnter,
    handleMouseLeave: handleYouTubeLeave,
    isHovered: isYouTubeHovered,
  } = useHover();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setSizeWindow(window.innerWidth);
      };

      // Set initial state
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const socialLinks = [
    {
      href: 'https://www.instagram.com/actress_model_victoria_liub/',
      src: <InstagramIcon hovered={isInstagramHovered} />,
      alt: 'Instagram',
      label: 'Instagram',
      labelMobile: 'Inst',
      handleMouseEnter: handleInstagramEnter,
      handleMouseLeave: handleInstagramLeave,
    },
    {
      href: 'https://www.facebook.com/VictoriaLiub/',
      src: <FacebookIcon hovered={isFacebookHovered} />,
      alt: 'Facebook',
      label: 'Facebook',
      labelMobile: 'FB',
      handleMouseEnter: handleFacebookEnter,
      handleMouseLeave: handleFacebookLeave,
    },
    {
      href: 'https://www.tiktok.com/@vl_by_victoria_liub',
      src: <TikTokIcon hovered={isTikTokHovered} />,
      alt: 'TikTok',
      label: 'TikTok',
      labelMobile: 'TT',
      handleMouseEnter: handleTikTokEnter,
      handleMouseLeave: handleTikTokLeave,
    },
    {
      href: 'https://www.youtube.com/@victorialiub/',
      src: <YouTubeIcon hovered={isYouTubeHovered} />,
      alt: 'YouTube',
      label: 'YouTube',
      labelMobile: 'YT',
      handleMouseEnter: handleYouTubeEnter,
      handleMouseLeave: handleYouTubeLeave,
    },
  ];

  const containerClass = isTwoColumn
    ? 'grid grid-cols-2 gap-4 text-[16px]'
    : 'flex justify-between';

  return (
    <>
      {sizeWindow > 970 ? (
        <div className={`uppercase ${containerClass}`}>
          {socialLinks.map(
            ({ href, src, label, handleMouseEnter, handleMouseLeave }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[22px] h-[22px] mr-[10px]">{src}</div>

                <span className="text-textMain hover:text-accent duration-custom">
                  {label}
                </span>
              </a>
            )
          )}
        </div>
      ) : (
        <div className="container uppercase flex justify-between pt-5 pb-5 laptop:hidden">
          {socialLinks.map(
            ({
              href,
              src,
              labelMobile,
              handleMouseEnter,
              handleMouseLeave,
            }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[22px] h-[22px] mr-[10px]">{src}</div>
                <span className="text-[13px]">{labelMobile}</span>
              </a>
            )
          )}
        </div>
      )}
    </>
  );
};
