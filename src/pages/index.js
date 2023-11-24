import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Sertifikat1 from '../images/sertifikat1.png';
import Sertifikat2 from '../images/sertifikat2.png';
import Sertifikat3 from '../images/sertifikat3.png';
import { Skill, LinkButton } from '../components/Button.js';
import SkillPopup from '../components/SkillPopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openSkillPopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openSkillPopup: false
    });
  };

  openSkillPopup = () => {
    this.setState({
      openSkillPopup: true
    });
  };

  render() {
    const { openSkillPopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openSkillPopup={this.openSkillPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Ridho Anras" className="avatar" />
            <t.H1 primary align="center">
              Ridho Anras
            </t.H1>
            <t.LargeP align="center" max45>
            Administrator | Trainer | Computer Science Learner 
            </t.LargeP>
            <Skill large onClick={this.openSkillPopup} book>
              Skill
            </Skill>
          </AboveFold>
          <Content>
            <t.H3 primary align="center" bold>
              Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di halaman saya yang mempresentasikan pengalaman, informasi, dan akivitas lainnya.
            </t.H3>
            <t.H2 primary align="center" bold className="portfolio">
              Sertifikat
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <img src={Sertifikat1} alt="Your Linkedin profile" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Google for Education Training Series</t.H2>
                <t.P>23 Februari - 15 April 2021</t.P>
                <t.P>Google Inc</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="https://edu-google-com.translate.goog/get-started/professional-development/?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=tc">
                  Telusuri informasi
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <img src={Sertifikat2} alt="Your Linkedin profile" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Network Automation Berbasis Web dengan Django</t.H2>
                <t.P>6 Oktober 2019</t.P>
                <t.P>Udemy</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="https://www.udemy.com/course/belajar-network-automation-berbasis-web-dengan-django/learn/lecture/14052369?start=0#content">
                  Telusuri informasi
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <img src={Sertifikat3} alt="Your Linkedin profile" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Teknologi Fiber Optik Sebagai Backbone Utama Internet</t.H2>
                <t.P>22 Juni 2020</t.P>
                <t.P>Politeknik Caltex Riau</t.P>
                <LinkButton primary bold className="link" as="a"
                  target="_blank"
                  href="https://opac.lib.pcr.ac.id/index.php?p=show_detail&id=5154&keywords=">
                  Telusuri informasi
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>          
          <WorkWithMe>
            <t.H1 green>Hubungi saya</t.H1>
            <t.LargeP>
              Berkomunikasi dengan saya untuk informasi lebih lanjut{' '}
            </t.LargeP>
            <LinkButton primary bold className="link" as="a"
              target="_blank"
              href="https://wa.me/628987898831">
                <t.H4 green>Beralih ke Whatsapp</t.H4>              
            </LinkButton>
          </WorkWithMe>
        </Layout>
        <SkillPopup open={openSkillPopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;