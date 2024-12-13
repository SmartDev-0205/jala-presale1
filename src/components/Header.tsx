import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import LogoImage from "../assets/image/Logo.png";
import twitterImg from "../assets/image/twitter.svg";
import githubImg from "../assets/image/github.svg";
import discordImg from "../assets/image/discord.svg";

const Header = () => {
  return (
    <section className="w-full header flex justify-center py-5">
      <div className="sm:px-10 px-10 max-w-4xl w-full">
        <div className="w-full">
          <div className="flex justify-between items-center pt-8">
            <img src={LogoImage} className="w-20 rounded-full" alt="" />
            <WalletMultiButton className="bg-green-600 hover:bg-green-400" />
          </div>
          <div className="flex justify-between items-end">
            <h1 className="text-white sm:text-5xl text-3xl font-bold pt-9">
              JALAPEÑO COIN
            </h1>
            <div className="flex gap-2">
              <a
                href="YOUR_DISCORD_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={discordImg}
                  className="rounded-full bg-white sm:w-9 sm:h-9 w-6 h-6"
                  alt="discordLogo"
                />
              </a>
              <a
                href="YOUR_TWITTER_URL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitterImg}
                  className="rounded-full bg-white sm:w-9 sm:h-9 w-6 h-6"
                  alt="twitterLogo"
                />
              </a>
            </div>
          </div>
          <p className="text-white text-base py-4 text-justify">
            Jalapeño Coin (JALA) blends the vibrancy of meme culture with the
            universal appeal of casual dining, creating a unique space in the
            cryptocurrency world. Aimed at fostering a community that values
            humor and simplicity, JALA bridges the gap between digital
            entertainment and the tangible pleasure of enjoying street food and
            local culinary gems.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Header;
