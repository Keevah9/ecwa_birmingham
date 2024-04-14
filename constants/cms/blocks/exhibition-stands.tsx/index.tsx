import "@splidejs/react-splide/css";
import dynamic from "next/dynamic";

const ExhibitionStands = dynamic(() => import('../../../components/BlockComponents/ExhibitionStands'));
export default function ExhibitionStandBlock(props: any) {
    return (<div>   
      <ExhibitionStands SectionContent={props?.data?.SectionContent}
        ExhibitionStandItems={props?.data?.ExhibitionStandItems} SectionTitle={props?.data?.SectionTitle} BottomContent={props?.data?.BottomContent} Tab={true} LinkUrl={props?.data?.LinkUrl} LinkText={props?.data?.LinkText} />
    </div>)
}