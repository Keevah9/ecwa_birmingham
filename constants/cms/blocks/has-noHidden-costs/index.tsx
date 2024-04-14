import dynamic from "next/dynamic";

const NoHiddenCosts = dynamic(() => import('../../../components/BlockComponents/NoHiddenCosts'));
export default function HasNoHiddenCostsBlock(props:any) {
  return <div className="mt-4">  <NoHiddenCosts /></div>;
}
