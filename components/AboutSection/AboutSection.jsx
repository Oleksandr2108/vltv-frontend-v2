'use client'

import { useTranslation } from 'react-i18next';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import { LogoIcon } from '@/Icons/LogoIcon';
import { classForTextOnImage } from '@/utils/classForButton';
import Image from 'next/image';
import tag from '@/public/images/tag.webp'
import { StarImg } from '@/Icons/Star';


const listItems = [
  {
    text: 'Strategic Leader in Fusion Health&Beauty technology, R&D',
    fill: '#D6A07E',
  },
  {
    text: 'Designing Tomorrow’s Wellness Solutions.',
    fill: '#E8D3D7',
  },
  {
    text: 'Fitness, Nutrition and Lifestyle Guru',
    fill: '#CCDBDE',
  },
  {
    text: 'Cosmetics Innovation',
    fill: '#D6A07E',
  },
  {
    text: 'Life Style Correction Expert',
    fill: '#E8D3D7',
  },
  {
    text: 'Austere Solution Minded',
    fill: '#CCDBDE',
  },
  {
    text: 'Develops a passion for advanced functional medicine',
    fill: '#D6A07E',
  },
];

export const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container  grid grid-cols-12 relative border-border border-r laptop:border-l-0">
        <div className="relative col-span-12 laptop:col-span-10 grid grid-cols-12 pt-[60px] laptop:pt-[140px] order-1 laptop:order-1">
          <h2 className="col-span-12 laptop:col-span-9 text-[22px] leading-[24.2px] text-textMain laptop:text-[48px] font-spectral-medium uppercase laptop:leading-[52.8px]">
            {t('aboutSection.title')}
          </h2>
          <p className="col-span-12 laptop:col-span-6 mt-[15px] laptop:mt-5 text-[14px] mb-[30px] laptop:text-[18px] text-textSubTitle laptop:mb-[20px]">
            {t('aboutSection.subtitle')}
          </p>
          {/* <div className='col-start-7 border-border border-t right-0 bottom-40 rotate-90 absolute w-full'></div> */}
        </div>
        {/* Image yoga */}
        <div className="col-span-6 pr-2 laptop:pt-[140px] laptop:pr-0 border-border border-l laptop:col-span-2  order-4 laptop:order-2">
          <div className="laptop:h-[327px] laptop:pb-[40px] laptop:flex laptop:items-end">
            <ResponsiveImage imgName={'yoga'} className={'w-full'} />
          </div>
        </div>

        {/* List block */}
        <div className="flex flex-col  col-span-12 laptop:flex-row laptop:col-span-7 border-t border-l border-border order-2 laptop:order-3">
          <div className="laptop:border-r border-border">
            <div className="flex justify-center  laptop:w-[355px] laptop:h-[355px] relative z-0">
              <ResponsiveImage imgName={'support'} />
              <div className="absolute top-[203px] left-[77px] mobileMedium:top-[250px] mobileMedium:left-[105px] xm:top-[250px] xm:left-[165px]  tablet:top-[250px] tablet:left-[255px] tabletLarge:left-[285px] pdt:left-[345px] laptop:top-[245px] laptop:left-[100px]">
                <Image
                  src={tag}
                  className="w-6 h-6 laptop:w-[30px] laptop:h-[30px]"
                  alt=''
                  width={24}
                  height={24}
                />
                
               
                <p
                  className={`${classForTextOnImage({
                    color: 'white',
                  })} rounded-[3px] text-[10px] laptop:text-[14px] leading-[14px] px-[10px] mt-[5px] h-6`}
                >
                  {t('aboutSection.tag')}
                </p>
              </div>
            </div>
            <h1 className="relative font-testimonia text-[64px] leading-[41.6px] ml-[20px] laptop:ml-0 laptop:text-[87px] leadeng-[56.55px] text-blue laptop:mt-[6px] z-10">
              Model
            </h1>
          </div>
          <div className="px-[30px] py-[20px]  laptop:py-[45px] text-textSubTitle">
            <ul>
              {listItems.map((item, index) => (
                <li key={index} className="flex  mb-5 items-start ">
                  <div className="h-[26px] flex items-center">
                    <StarImg fill={item.fill} />
                  </div>
                  <span className="ml-[10px] text-[14px] laptop:text-[18px]">
                    {t(`aboutSection.list.item_${index + 1}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Logo */}
        <div className="col-span-12 pt-[0px] laptop:col-span-3 border-border border-l border-t laptop:border-x laptop:pt-[140px] order-3 laptop:order-4">
          <div className="flex  laptop:items-end  ">
            <div className="hidden  laptop:flex items-center justify-center w-full ">
              <LogoIcon width="97.35" height="90" fill="#D6A07E" />
            </div>
            <div className="flex h-[145px] laptop:h-[454px] laptop:hidden items-center justify-center w-full border-t  border-border">
              <LogoIcon width="54" height="50" fill="#D6A07E" />
            </div>
          </div>
        </div>
        {/* Image sport */}
        <div className="col-span-6  gap-[10px] pl-2 laptop:p-0  border-t laptop:block laptop:col-span-2 laptop:border-r border-border order-5 laptop:order-5">
          <ResponsiveImage imgName={'sport'} className={'w-full '} />
        </div>
      </div>
    </>
  );
};
