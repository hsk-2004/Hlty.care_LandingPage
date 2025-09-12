import Image from "next/image";

export default function Follow() {
  return (
    <div className="text-bg mb-10">
      <h3 className="mb-4 mt-4 text-primary text-center text-xl font-bold">
        Follow us on:
      </h3>
      <ul className="flex justify-center gap-2">
      <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/raising.hltyhumans?igsh=bGcweWVpNmFjenZs">
            <Image
              src="/instagram.png"
              alt="Instagram-alt"
              width={36}
              height={36}
            />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://chat.whatsapp.com/DsRfG3TSzxd5X3Yscy7Fvm?mode=ems_share_t">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp-alt"
              width={36}
              height={36}
            />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@haha_hlty_kids?si=1dkpklxtYPWCIPop">
            <Image
              src="/youtube.png"
              alt="YouTube-alt"
              width={36}
              height={36}
            />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/the-hlty-beings-collective/?viewAsMember=true">
            <Image
              src="/linkedin.png"
              alt="LinkedIn-alt"
              width={36}
              height={36}
            />
          </a>
        </li>
        
       
      </ul>
    </div>
  );
}
