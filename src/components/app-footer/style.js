import styled from 'styled-components'

export const FooterWrapper = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 16px;
  .container {
    display: flex;
  }
`
export const FooterLeft = styled.div`
  line-height: 2em;
  .footer-link {
    a {
      color: #999;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    color: #666;
  }
`

export const FooterRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ul {
    display: flex;
    li {
      margin-right: 40px;
      text-align: center;
      .link {
        display: block;
        width: 50px;
        height: 44px;
        text-indent: -9999px;
        background-image: url(${require("@/assets/img/sprite_footer_02.png")});
        background-size: 110px 450px;
      }
      :nth-child(1) .link {
        background-position: -60px -101px;
      }
      :nth-child(2) .link {
        background-position: 0 0;
      }
      :nth-child(3) .link {
        background-position: -60px -50px;
      }
      :nth-child(4) .link {
        background-position: 0 -101px;
      }

      .title {
        margin-top: 5px;
        display: block;
        width: 52px;
        height: 10px;
        text-indent: -9999px;
        background-image: url(${require("@/assets/img/sprite_footer_01.png")});
        background-size: 180px 100px;
      }

      :nth-child(1) .title {
        background-position: -1px -90px;
      }
      :nth-child(2) .title {
        background-position: 0 0;
        margin-top: 7px;
      }
      :nth-child(3) .title {
        background-position: 0 -54px;
        margin-top: 6px;
      }

      :nth-child(4) .title {
        background-position: -1px -72px;
        margin-top: 6px;
      }
    }
  }
`