import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="text-gray-700 hover:text-black hover:underline" href={href}>
      {children}
    </a>
  );
}

export default function SideBarProfile() {
  return (
    <>
      <h4 className="font-bold">Profile</h4>
      <div className="mt-2 text-center">
        <Image src="/profile.jpeg" width={150} height={150}></Image>
        <p className="font-medium">Daiki Nakano</p>
      </div>
      <div className="text-center">
        <p>
          A student at {<Link href="https://42tokyo.jp/">42Tokyo</Link>}.
        </p>
        <ul className="flex flex-row justify-center mt-2">
          <li>
            <a href="https://github.com/dai65527">
              <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
            </a>
          </li>
          <li className="ml-3">
            <a href="https://twitter.com/daitaidaidai789">
              <FontAwesomeIcon className="w-5 h-5" icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
