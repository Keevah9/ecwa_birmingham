import dynamic from "next/dynamic";

// const FAQs = dynamic(() => import('../../../components/BlockComponents/faq/FAQComponent'));
function FAQsBlock(props: any) {
  return (
    <div className="flexible-component" >
      {/* <FAQs data={props?.data?.FAQ} /> */}
    </div>
  );
}
export default FAQsBlock;
