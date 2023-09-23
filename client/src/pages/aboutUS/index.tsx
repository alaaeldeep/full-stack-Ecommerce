/* styles */
import styles from "./about.module.css";

/* components */

const AboutUSPage = () => {
    return (
        <div className={styles.aboutContainer}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
                <div className={styles.textContainer}>
                    <div className={styles.headTitle}>
                        WE Are <span>SHOPFY</span>
                    </div>
                    <p>Providing you with the latest Products</p>
                </div>
            </div>

            <div className={styles.aboutSummary}>
                <div>
                    <img
                        src="/public/1200px-Shop.svg.png"
                        alt=""
                        height={200}
                    />
                </div>
                <div style={{}}>
                    <p className={styles.paragraphContainer}>
                        At SHOPFY, we want to solve Lorem ipsum dolor sit amet
                    </p>
                    <p className={styles.paragraphContainer}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iusto, temporibus eveniet corrupti voluptas
                        doloremque doloribus
                    </p>
                    <p className={styles.paragraphContainer}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Iusto, temporibus eveniet corrupti voluptas
                        doloremque doloribus hic animi nisi odio? Nesciunt ipsam
                        excepturi alias aliquam.
                    </p>
                </div>
            </div>
            <div className={styles.headTitle}>
                Meet Our <span>Leadership</span>
            </div>
            <div className={styles.leaderContainer}>
                <div className={styles.leaderCard}>
                    <img
                        src="../../../public/aboutUs/leader1.jpeg"
                        alt=""
                        width={300}
                    />
                    <div className={styles.leaderDescription}>
                        <h2>Jonathan Key</h2>
                        <p className={styles.leaderTitle}>CO-Founder & CEO </p>

                        <p>
                            Leads the daily operations at Apptopia, including
                            product development and global sales. Jonathan is
                            passionate about people, sports, and really
                            efficient processes.
                        </p>
                    </div>
                </div>
                <div className={styles.leaderCard}>
                    <img
                        src="../../../public/aboutUs/leader2.png"
                        alt=""
                        width={300}
                    />
                    <div className={styles.leaderDescription}>
                        <h2>Serge Balyuk</h2>
                        <p className={styles.leaderTitle}>
                            Chief Technology Officer
                        </p>

                        <p>
                            Fearlessly leads our engineering team and is
                            responsible for Apptopia’s underlying technology.
                            His focus is on data acquisition, with a passion for
                            backend architecture and infrastructure.
                        </p>
                    </div>
                </div>
                <div className={styles.leaderCard}>
                    <img
                        src="../../../public/aboutUs/leader3.jpeg"
                        alt=""
                        width={300}
                    />
                    <div className={styles.leaderDescription}>
                        <h2>Steve Swad</h2>
                        <p className={styles.leaderTitle}>President & COO </p>

                        <p>
                            Executes Apptopia's strategic vision, galvanizes
                            operational approach, and transforms business
                            outcomes. Results-oriented leader, focused on
                            optimization and communication.
                        </p>
                    </div>
                </div>
                <div className={styles.leaderCard}>
                    <img
                        src="../../../public/aboutUs/leader4.jpeg"
                        alt=""
                        width={300}
                    />
                    <div className={styles.leaderDescription}>
                        <h2>JTim Santos</h2>
                        <p className={styles.leaderTitle}>
                            Chief Product Officer{" "}
                        </p>

                        <p>
                            Oversees all stages of Apptopia's product lifecycle.
                            Strategic thinker with a passion for building teams
                            and creating elegant solutions to complex problems.
                        </p>
                    </div>
                </div>
                <div className={styles.leaderCard}>
                    <img
                        src="../../../public/aboutUs/leader5.jpeg"
                        alt=""
                        width={300}
                    />
                    <div className={styles.leaderDescription}>
                        <h2>Eli Sapir</h2>
                        <p className={styles.leaderTitle}>
                            CO-Founder & Chairman{" "}
                        </p>

                        <p>
                            Drives Apptopia’s strategic vision and manages
                            investor relations. Before Apptopia Eli was involved
                            in several startups, including: GPush, Oasys Water,
                            GreatPoint Energy, and DVTel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUSPage;

/* 

 
*/
