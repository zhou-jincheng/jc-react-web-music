import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  color: #ccc;
  font-size: 14px;
  background-color: #242424;
  .container {
    display: flex;
    justify-content: space-between;
    height: 70px;
    line-height: 70px;
  }
  .divide {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .select-list {
    display: flex;
    .select-item {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }
      :last-of-type a {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          right: -14px;
          top: 18px;
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
        }
      }
      &:hover {
        background-color: #000;
        a {
          color: #fff;
          text-decoration: none;
        }
      }
      .active {
        background-color: #000;
          .icon {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 14px;
          height: 6px;
          background-position: -226px 0;
        }
      }
    }
  }
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    margin: 0 16px;
    border: 1px solid #777;
    border-radius: 16px;
    text-align: center;
    :hover {
      cursor: pointer;
    }
  }
  .login:hover {
    cursor: pointer;
  }
`