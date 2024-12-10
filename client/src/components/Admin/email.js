import { FaTrashAlt } from "react-icons/fa"; // Delete icon
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPaperclip,
} from "react-icons/fa";
export default function Email({ email, onClick }) {
  return (
    <div
      onClick={() => onClick(email)}
      className="relative bg-lightGray bg-opacity-90  rounded-br-[60px] rounded-tr-[60px] rounded-bl-[60px] rounded-tl-none shadow-lg p-6 flex space-x-64 transition-all transform hover:scale-105 hover:bg-opacity-100 border-2 border-neonMintGreen mt-4"
    >
      <div className="  flex flex-col space-y-3">
        {/* Email Content */}
        <h3 className="text-lg font-bold text-neonMintGreen">
          {email.subject}
        </h3>

        {/* Email Body */}
        <p className="text-sm text-gray-300 italic">{email.body}</p>
        {email.attachments.length > 0 && (
          <div className="flex items-center mt-2">
            <FaPaperclip className="text-neonMintGreen mr-2" />
            <span className="text-gray-300">
              {email.attachments.length} Attachment
              {email.attachments.length > 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>
      <div className="text-sm text-gray-200 leading-relaxed space-y-3 ">
        <div className="flex items-center border-b border-gray-300 pb-3">
          <FaUser className="text-neonMintGreen mr-2" size={16} />
          <span className="font-semibold text-darkNavyBlue bg-neonMintGreen rounded-lg px-3 py-1 cursor-pointer hover:bg-gray-300 transition-colors">
            From:
          </span>
          <span className="text-gray-400 ml-2">{email.sender.name}</span>
        </div>

        <div className="flex items-center  pb-3">
          <FaEnvelope className="text-neonMintGreen mr-2" size={16} />
          <span className="font-semibold text-darkNavyBlue bg-neonMintGreen rounded-lg px-3 py-1 cursor-pointer hover:bg-gray-300 transition-colors">
            To:
          </span>
          <span className="ml-2 text-gray-300">
            {email.recipients.map((recipient) => recipient.name).join(", ")}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
