// components/SocialLinks.tsx

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaCode } from 'react-icons/fa'; // Import icons

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 p-4">
      <ul className="flex flex-col space-y-4">
        <li>
          <a
            href="https://www.linkedin.com/in/rudendru-rahul-366955201/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-yellow-500 transition-colors"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Rudendru-03" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-yellow-500 transition-colors"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://x.com/rudendru39877" // Replace with your Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-yellow-500 transition-colors"
          >
            <FaTwitter className="mr-2" />
            Twitter
          </a>
        </li>
        <li>
          <a
            href="mailto:rudendru0310@gmail.com" // Replace with your email
            className="flex items-center text-white hover:text-yellow-500 transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Email
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/u/bumrah03/" // Replace with your LeetCode URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-yellow-500 transition-colors"
          >
            <FaCode className="mr-2" />
            LeetCode
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
