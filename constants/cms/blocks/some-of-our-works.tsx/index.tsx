import "@splidejs/react-splide/css";
import dynamic from "next/dynamic";

const ThreeColContent = dynamic(() => import('../../../components/BlockComponents/ThreeColContent'));
export default function WorksBlock(props: any) {
    return (<div>   
    <ThreeColContent HasPagination={props?.data?.HasPagination} SectionContent={props?.data?.SectionContent}
      SomeOfOurWorksItems={props?.data?.SomeOfOurWorksItems} SectionTitle={props?.data?.SectionTitle} Tab={true}  LinkUrl={props?.data?.LinkUrl} LinkText={props?.data?.LinkText}/>
    </div>)
}