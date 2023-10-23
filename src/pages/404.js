import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout from '../components/Layout';
import SkillPopup from '../components/SkillPopup.js';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 157px 0 100px 0;
`;

const NotFoundPageWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
`;

class NotFoundPage extends React.Component {
  state = {
    openSkillPopup: false
  };

  closeSkillPopup = () => {
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
    return (
      <NotFoundPageWrapper>
        <Layout theme="white" openSkillPopup={this.openSkillPopup}>
          <AboveFold>
            <t.H1 green align="center">
              404
            </t.H1>
            <t.H3 align="center" max45>
              Not found
            </t.H3>
          </AboveFold>
        </Layout>
        <SkillPopup
          open={openSkillPopup}
          handleClose={this.closeSkillPopup}
        />
      </NotFoundPageWrapper>
    );
  }
}

export default NotFoundPage;
