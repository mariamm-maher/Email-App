export default function Heading({ mainText, subText }) {
  return (
    <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-pureWhite font-sans tracking-tight z-10 mt-32 ">
      <span className="text-neonMintGreen">{mainText}</span>
      <div className="mt-6 text-transparent bg-clip-text bg-gradient-to-r from-neonMintGreen via-white to-darkNavyBlue">
        {subText}
      </div>
    </h2>
  );
}
