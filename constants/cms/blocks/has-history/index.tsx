import Image from "next/image";
import "@splidejs/react-splide/css";
import BgLeftImg1 from "../../../../public/img/bgrightimg.png";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Button from "@/components/Button";
export default function HasHistoryBlock(props: any) {
  const router = useRouter();
  return (
    <>
      {props?.data?.HasHistory && (
        <section className="relative h-ful bordr bg-ecwadarblue overflow-auto">
          <span id="our-history" className=""></span>
          <div className="bg- max-container overflow-splide text-cente py- relative">
            <div className="flex h-ful text-center justify-center items-center overflow-aut flex-col w-full h-full">
              <span className=" uppercase ">Our History</span>
              <h2 className="">History of ECWA</h2>
              <p className=" mb-4 text-black">
                The Evangelical Church Winning All, previously known as the Evangelical Church of West Africa, is one of the largest Christian denominations in Nigeria, with over ten million members. ECWA is a partner church of the international Christian mission organization, Serving In Mission (SIM), formerly Sudan Interior Mission. ECWA was founded in 1954 when the SIM-related churches (initially in Nigeria) came together to form an indigenous body. Since that time, mission stations, Bible Schools, academic schools, and medical programs have been transferred to ECWA leadership.
              </p>
              <div> <Button type={"button"} title={"Test"} variant="btn" /></div>
            </div>
            <div className="max-container mx-auto flex flex-col items-start md:flex-row ">
              {/* <div className="flex h-full overflow-auto flex-col w-full sticky h-full md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <span className=" uppercase tracking-loose">Our History</span>
              <h2 className="">SIM/ECWA History</h2>
              <p className=" mb-4">
                
                SIM is an international, interdenominational Christian mission organization. It was established in 1893 by its three founders, Walter Gowans and Rowland Bingham of Canada and Thomas Kent of the United States.
              </p>
              <div> <Button type={"button"} title={"Test"} variant="btn" /></div>
            </div> */}
              <div className="ml-0 lg:ml-1 lg:w-full ">
                <div className=" mx-auto w-full h-full">
                  <div className="relative wrap overflow-hidden lg:px-10 py-10 h-full">
                    <div className=" hidden sm:block border-2-2 border-#F9864B absolute h-full border"
                      style={{ right: " 50%", border: "2px solid #F9864B", borderRadius: "1%" }}></div>
                    <div className="hidden sm:block  border-2-2 border-ecwaorange absolute h-full border"
                      style={{ right: " 50%", border: "2px solid #F9864B", borderRadius: "1%" }}></div>
                    <div className="mb-3 sm:mb-8  flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 sm:w-6/12"></div>
                      <div className="order-1 sm:w-6/12 sm:pr-8 py-4 text-left">
                        <span className="mb-3 text-base text-ecwaorange">1893</span>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">SIM/ECWA History</h4>
                        <p className=" text-black">
                          SIM is an international, interdenominational Christian mission organization. It was established in 1893 by its three founders, Walter Gowans and Rowland Bingham of Canada and Thomas Kent of the United States.
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 sm:mb-8  flex justify-between items-center w-full right-timeline">
                      <div className="order-1 sm:w-6/12"></div>
                      <div className="order-1  sm:w-6/12 sm:pl-8 py-4 text-left">
                        <span className="mb-3 text-base text-ecwaorange">Vision for SIM</span>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">The Founding of SIM in Africa</h4>
                        <p className=" leading-snug  text-opacity-100">
                          The vision for SIM (and ECWA) was first born in the heart of a woman – Margaret (Craig) Gowans.</p>
                        <p className="py-2">
                          Margaret Craig was born in 1836 in Hamilton, Lanarkshire, Scotland, and married a brewer in Kilmarnock named John Gowans (1836-1906) in 1861. She was the first person in SIM/ECWA history to have a vision to take the gospel to the Soudan, which then led to what we know today as ECWA. They had nine children and emigrated to Toronto, Canada, in 1879.. Mrs. Gowans fervently believed that world-wide missions was an important part of the church’s calling. It was due, in part, to her influence that two of their children became missionaries. Annie, their oldest, went to China in 1892. Walter, their fifth child, went to the Sudan. According to Bingham, Mrs. Gowans told him about her son’s call to go to the Sudan where 60-90million people “lived without a single Christian missionary.”</p>
                        <p className="">
                          It was she who encouraged her own son Walter, his friend Thomas Kent and later Roland Bingham, to embrace God’s heart for the Soudan and to be willing to take the Gospel to those of that region who had not heard it.</p>
                        <p className="pt-2">
                          The initials originally stood for “Soudan Interior Mission,” Soudan being an older spelling of the Sudan region of West Africa. After various name changes and mergers, the mission simply goes by “SIM” today. In French-speaking countries it is known as “Société Internationale Missionnaire.” It is made up of united organizations that began more than 100 years ago, including Africa Evangelical Fellowship, Andes Evangelical Mission, International Christian Fellowship and Sudan Interior Mission.
                        </p>
                      </div>
                    </div>
                    <div className="mb-3 sm:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 sm:w-6/12"></div>
                      <div className="order-1 sm:w-6/12 sm:pr-8 py-4 text-left">
                        <span className="mb-3 text-base text-ecwaorange"> The Three Founders</span>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">The First Attempt</h4>
                        <p className=" leading-snug ">
                          Walter Gowans was a Scottish Canadian. His parents were pillars of the Presbyterian Church. His Sister was a missionary to China. He, Walter, was the first of the three founders to feel the burden of the Soudan. Kent and Bingham joined him in England to prepare to leave for the Soudan.</p>
                        <p className="py-2">
                          Thomas Kent was an American, from Buffalo NY, a Congregationalist (Baptist). He was later invited to join Gowans and Bingham in UK to prepare to go to the Soudan.
                          Roland Bingham was an English Canadian. He migrated from England to Canada in 1889. He was a Member of the Salvation Army. It was Mrs Gowans who had the most influence on him. He made a pledge to join her son in England even though he had never met him.</p>
                        <p className="">
                          Gowans went to England in June 1893. Later Bingham joined him and then Kent by October 1893. They struggled to raise finance but decided to go ahead anyway by faith. They did not form a mission, they had no denominational support. They just went as three individuals. They learnt of the death of other missionaries in the Soudan but were undeterred. They departed on 4th November 1893 on board SS Accra and landed in Lagos on 4th December.</p>
                        <p className="py-2">
                          They faced problems of discouragement in Lagos. The Superintendent of the Wesleyan Mission Bryau Roe:
                          He told them: You will never see the Sudan, your children will never see the Sudan, your grandchildren may. Bingham was struck down by fever after only three weeks. Walter, like the mother, believed in divine healing. Kent and Bingham did as well. Bingham’s willingness, however, to take medicine after his temperature rose to over 105⁰ shortly after they arrived in Lagos caused a rift between him and Gowans.
                        </p>
                        <p>
                          He remained in Lagos and the others proceeded to the Sudan. They left April 1894 for Lake Chad via Kano. The men brought a boat with them, hoping they could travel up the Niger River to its confluence to the Benue, travel east along the Benue, and then trek overland to Lake Chad. When Royal Niger Company officials refused to grant them permission to take the riverine route, the men decided to travel overland from Lagos into the Central Sudan.
                        </p>
                        <p className="py-2">
                          Sunday 6th May 1894 they entered Bida and visited the Etsu Maliki (Emir) in his palace.

                          Monday May 14th 1894 they went to Bida market looking for where to station and preach. They made plans also to get carriers to accompany them to Kano. On Wednesday 30th May 1894 Thomas Kent became sick again. Vomiting blood & feverish, the poor fellow couldn’t travel even till 1st week of June because of Toms illness and war on the road.
                        </p><p className="">
                          Monday 11th June 1894 they went to Lemu. Then 9th August 1894 Gowans wrote a letter to his Mum. Well Glory to God He has enabled me to make a hard fight for the Soudan & altho [sick] it may seem like a total failure & defeat it is not we shall have the victory & that right speedily.
                        </p><p className="py-2">
                          I have no regret for undertaking this venture & in this manner my life has not been thrown away My only regrets are for my poor dear Mother for her sake I would have chosen to live.
                          Mother Dear! – And what a mother you have been, it seems I appreciate you now more than ever I did. Oh how often I have thought while lying here of your love & how I have longed to see you again in the flesh. Don’t mourn for me darling dearest Mother if the suffering was great thank remember it is all over now & think of the glory I am enjoying and rejoice that “your boy” was permitted to have a hand in the redemption of the Soudan.
                        </p>
                        <p className="">
                          Oh! How I did wish to live for your sake. Thomas my cook, will tell you of all my plans. God knows that next to His glory my ambition was to make you happy & I had certain schemes which I am positive would have succeeded and  which besides helping on the work would have enabled me to make you and the girls comfortable…
                          Gowans, however, fail sick and some explorers met him and was taking him to Lagos in the hope of saving his life but he died at Ghirku only 65 km away, on 17th November 1894.
                        </p><p className="py-2">
                          Kent reached Bida on 3rd October 1894. He waited there because of transport problems. He wrote on 30th November that he expected to depart for Kano next day, but took ill and died in Bida on 8th December 1894.
                          He was in the presence of two other missionaries (Holt and Lomax) who sent word of his death to the Southern Baptists in Ogbomoso.
                        </p><p className="">
                          David Loynd left from England on 20th October 1894 to become the fourth founder. In December he and Bingham, now recovered, went on to Ogbomoso where in early 1895 they learnt the fate of Kent and Gowans. This is where they decided to revise their strategy and develop a chain of stations rather than attempting a giant leap to the Sudan. They returned to England in May 1895. Bingham then went to Canada to see Gowans’ mother.
                        </p><p className="pt-2">
                          Bingham told her about her son’s death. “She came in a little later and extended her hand and held mine in silence for a little while. We were both thinking about the past. Then she broke the silence with these words. ‘Well, Mr. Bingham, I would rather have Walter go out to the Sudan and die there, all alone, than have him home today, disobeying his Lord.’ She prayed specifically that God would send a messenger of the Gospel to the village where her son died”
                        </p>
                      </div>
                    </div>

                    <div className="mb-3 sm:mb-8 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 sm:w-6/12"></div>

                      <div className="order-1  sm:w-6/12 sm:pl-8 py-4">
                        <span className="mb-3 text-base text-ecwaorange">African Industrial Mission (AIM)</span>
                        <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Later Attempts</h4>
                        <p >
                          Bingham married Helen Blair in 1898 and became full time secretary of the mission, now organized. From 1898 it was known as the African Industrial Mission (AIM). On 21st February 1900 he left Liverpool on SS Jebba for Lagos with Moline and Taylor, but all returned home to Canada because of illness.
                        </p>
                        <p className="py-2">
                          Two were sent to Tripoli in 1901 to study Hausa. Two others were added and the four sailed on 30th October on SS Bornu with Sir Frederick Lugard. They arrived Niger River mouth 18th November 1901. The mission was still known as the Africa Industrial Mission. Taylor, Banfield (Canada), Anthony, Robinson (USA) went on to Lokoja where they stayed four months while considering the best mission site, including Kabba. They left for Pategi on 15th March 1902 and arrived 18th. They established the First mission station, more than eight years after the first landing in Nigeria. Dr Andrew Stirrett arrived to join them in November that year.
                        </p>
                        <p className="">
                          The Second mission station was established at Wushishi in 1904. In September 1905 the mission became the Africa Evangelistic Mission (AEM). In Aug 1906 it became part of the Sudan United Mission (SUM) but later separated again to become the Sudan Interior Mission in June 1907.</p>
                        <p className="py-2">
                          African Mission Society was established in 1948. The churches established were incorporated as The Association of Evangelical Churches of West Africa in 1954 with 400 local churches in 7 DCCs. Today, the church records over 6,000 churches organized into 84 DCCs and about 6 million members.</p>
                        <p className="">
                          Many people have benefited directly or indirectly through the ministries of SIM/ECWA.
                        </p>
                      </div>
                    </div>

                    <div className=" sm:mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 sm:w-6/12"></div>
                      <div className="order-1 sm:w-6/12 sm:pr-8 py-4 text-left">
                        <span className="mb-3 text-base text-ecwaorange"> Exceedingly Growth</span>
                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Today</h4>
                        <p className="">
                          Throughout Nigeria, but especially in the central regions, ECWA churches are growing rapidly. Some churches have experienced as much as 400% growth in the last several years. Churches in the Northern (traditionally more Islamic) parts of the country are also growing.
                        </p>
                        <p className="py-2"> Bingham University Karu was stated in 2005 as a way of meeting the soaring need for not only quality, secular education, but education that recognizes and integrates the moral and spiritual values on which the Christian faith is founded which fueled its establishment. ECWA started three Theological Seminaries: ECWA Theological Seminary, Igbaja that started as a School of Prophets in 1918, ECWA Theological Seminary, Kagoro established in 1931, and Jos ECWA Theological Seminary in 1982. There are also eight Bible colleges and fifteen theological training institutes. ECWA’s Medical Department coordinates a wide network which includes four hospitals, a Community Health Program with over 110 health clinics, a Central Pharmacy and the School of Nursing and Midwifery. It is also involved in TV, radio, publications for outreach and discipleship, rural development, urban ministries, and cross-cultural missions. ECWA TV Africa was established in 2018 as a catalyst for reaching out to the world through media by preaching, teaching, inspiring, winning all for Christ Jesus and raising a godly generation for the advancement of the gospel and the Kingdom’s work.
                        </p>
                        <p>  There has been a serious confrontation between evangelical Christians standing in opposition to the expansion of Sharia law in northern Nigeria by militant Muslims since 1999. The confrontation has radicalized and politicized the Christians. Christians are under attack in Northern Nigeria and are being slaughtered in the thousands by the Islamic Militant. Unfortunately, Nigerian officials are downplaying it, if not outright denying, the religious dimension of what’s happening. Instead, they’re calling this a conflict over resources, in this case, over land. Pray for ECWA and its outreaches.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img className="mx-auto h-[120px] w-[120px] hidden sm:block sm:-mt-0" src="/ecwa-logo.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
