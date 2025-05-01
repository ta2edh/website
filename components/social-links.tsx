import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBluesky, 
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faDiscord,
  faTelegram,
  faSignalMessenger,
  faLastfm,
  faSteam,
  faMastodon,
  faHackerNews,
  faKeybase
 } from '@fortawesome/free-brands-svg-icons'
 import { 
  faGlobe,
  faKey,
  faMessage,
  faTowerCell
 } from '@fortawesome/free-solid-svg-icons'

export default function SocialLinks() {
  const socialLinks = [
    { name: "github", icon: <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />, url: "https://github.com/ta2edh" },
    { name: "linkedin", icon: <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />, url: "https://www.linkedin.com/in/erdemhacisalihoglu/" },
    { name: "twitter", icon: <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />, url: "https://x.com/ta2edh" },
    { name: "instagram", icon: <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />, url: "http://instagram.com/erdemhglu" },
    { name: "discord", icon: <FontAwesomeIcon icon={faDiscord} className="w-4 h-4" />, url: "https://discord.com/users/1216321857548980375" },
    { name: "telegram", icon: <FontAwesomeIcon icon={faTelegram} className="w-4 h-4" />, url: "https://t.me/ta2edh" },
    { name: "signal", icon: <FontAwesomeIcon icon={faSignalMessenger} className="w-4 h-4" />, url: "https://signal.me/#eu/hKRNDYlWdknbk948hkD8QHtFe1IsveuJFv4GVNqH-HYe6Okb3PRAGI5RP8v-8iQu" },
    { name: "matrix", icon: <FontAwesomeIcon icon={faMessage} className="w-4 h-4" />, url: "https://matrix.to/#/@ehaci:matrix.org" },
    { name: "lastfm", icon: <FontAwesomeIcon icon={faLastfm} className="w-4 h-4" />, url: "https://www.last.fm/user/ta2edh" },
    { name: "steam", icon: <FontAwesomeIcon icon={faSteam} className="w-4 h-4" />, url: "https://steamcommunity.com/id/ta2edh/" },
    { name: "QRZ", icon: <FontAwesomeIcon icon={faTowerCell} className="w-4 h-4" />, url: "https://www.qrz.com/db/W6/TA2EDH" },
    { name: "bluesky", icon: <FontAwesomeIcon icon={faBluesky} className="w-4 h-4" />, url: "https://bsky.app/profile/ta2edh.com" },
    { name: "mastodon", icon: <FontAwesomeIcon icon={faMastodon} className="w-4 h-4" />, url: "https://mastodon.social/@ta2edh" },
    { name: "hackernews", icon: <FontAwesomeIcon icon={faHackerNews} className="w-4 h-4" />, url: "https://news.ycombinator.com/user?id=ta2edh" },
    { name: "keybase", icon: <FontAwesomeIcon icon={faKeybase} className="w-4 h-4" />, url: "https://keybase.io/ta2edh" },
    { name: "keyoxide", icon: <FontAwesomeIcon icon={faKey} className="w-4 h-4" />, url: "https://keyoxide.org/openpgp4fpr:9BF5329BBB0BB05DD8DB85EEDB8A39DA5378527B" },
    { name: "lemmy", icon: <FontAwesomeIcon icon={faGlobe} className="w-4 h-4" />, url: "https://lemmy.world/u/ta2edh" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 bg-black/30 border border-green-900/40 rounded-md hover:bg-green-900/20 transition-colors text-xs sm:text-sm font-mono"
        >
          {link.icon}
          <span className="capitalize truncate">{link.name}</span>
        </Link>
      ))}
    </div>
  )
}
