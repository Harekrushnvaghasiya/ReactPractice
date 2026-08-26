import { AppDownloadLink, AppDownloadWrapper } from "./style";
import { appLinks } from "../../helpers/raw";
import Image from "../image";

interface AppDownloadProps {
  isNavbar?: boolean;
}

const AppDownload = ({ isNavbar = false }: AppDownloadProps) => {
  return (
    <AppDownloadWrapper $isNavbar={isNavbar}>
      {appLinks.map((app) => (
        <AppDownloadLink key={app.label} href={app.href}>
          <Image src={app.image} alt={app.label} width="auto" height={40} />
        </AppDownloadLink>
      ))}
    </AppDownloadWrapper>
  );
};

export default AppDownload;
