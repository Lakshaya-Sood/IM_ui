export const State = {
  PRIMARY: 'primary',
  SUCCESS: 'success',
  SUCCESS_SPECIAL: 'successSpecial',
  WARNING: 'warning',
  WARNING_SPECIAL: 'warningSpecial',
  DANGER: 'danger',
  INFO: 'info',
  DEFAULT: 'default',
  SKYBLUE: 'skyblue'
}

export const Size = {
  S: 'small',
  M: 'medium',
  L: 'large',
  XL: 'x-large'
}

// color dictionary
const fuiPalette = {
  greenV3: '#74BA00', // Success Green
  blueV2: '#66c2ff', // Sky Blue reduced
  blueV3: '#0099FF', // Sky Blue
  blueV7: '#1A3B7A', // Logo Blue
  redV1: 'd90000', // Discount Red,
  greyV1: '#F4F4F4', // Background Grey
  greyV2: '#CCCCCC', // Outline Grey
  greyV3: '#999999', // Medium Grey
  greyV4: '#666666' // Just Grey
}

// bootstrap style theme definition using the color palette
const fuiTheme = {
  primaryColor: fuiPalette.blueV7,
  infoColor: fuiPalette.blueV3,
  infoColor2: fuiPalette.blueV2,
  successColor: fuiPalette.greenV3,
  successSpecialColor: fuiPalette.greenV3,
  warningColor: fuiPalette.orangeV3,
  warningSpecial: fuiPalette.orangeV3,
  errorColor: fuiPalette.redV1,
  mutedColor: fuiPalette.greyV3,
  mutedColor2: fuiPalette.greyV2
}

export const FuiTheme = {
  palette: fuiPalette,
  theme: fuiTheme,
  appHeader: {
    height: '80px',
    background: 'rgba(0, 38, 65, 0.95)'
  },
  nova: {

  },
  heather: {
    height: '56px',
    background: 'rgba(0, 38, 65, 0.95)',
    padding: '0 19px'
  },
  sidebar: {
    background: 'rgba(0, 38, 65, 0.95)',
    backgroundImage: 'linear-gradient(-135deg, rgba(0,95,255,0.20) 0%, rgba(0,95,255,0.00) 100%)'
  },
  sidney: {
    position: 'absolute',
    background: 'rgba(0, 38, 65, 0.95)',
    backgroundImage: 'linear-gradient(-135deg, rgba(0,95,255,0.20) 0%, rgba(0,95,255,0.00) 100%)',
    borderRadius: 0,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    boxSizing: 'border-box',
    top: 0,
    left: 0,
    bottom: 0,
    width: '80px',
    zIndex: '1299'
  },
  appSecondaryHeader: {
    height: '56px',
    background: '#fff',
    'justify-content': 'flex-start',
    'box-shadow': 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
  },
  appFooter: {
    height: '48px',
    background: '#F3F8FB'
  },
  appSecondaryEmployee: {
    height: '80px',
    background: '#fff',
    'justify-content': 'flex-start',
    'box-shadow': 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
  },
  businessCard: {
    header: {
      color: fuiTheme.mutedColor,
      padding: '10px',
      'border-bottom': '1px solid ' + fuiTheme.mutedColor2
    },
    body: {
      // padding: '24px',
      // borderBottom: '1px solid ' + fuiTheme.mutedColor2
      username: {
        color: fuiTheme.primaryColor,
        fontSize: '14px'
      },
      links: {
        color: fuiTheme.infoColor,
        cursor: 'pointer',
        fontSize: '13px',
        textDecoration: 'none'
      },
      linksUL: {
        margin: 0,
        listStyle: 'none',
        padding: 0
      },
      userIcon: {
        height: '60px',
        width: '60px'
      },
      outerDivStyle: {
        margin: '-16px',
        padding: '16px 10px',
        borderBottom: '1px solid ' + fuiTheme.mutedColor2
      }
    }
  },
  userIcon: {
    color: fuiPalette.blueV2,
    title: {
      color: fuiPalette.blueV2
    },
    subtitle: {
      color: fuiPalette.greyV1
    }
  },
  checkbox: {
    checkedColor: '#0064fe',
    labelStyle: {
      color: '#33435b',
      fontWeight: 'normal',
      fontSize: '16px'
    }
  },
  radiobutton: {
    checkedColor: '#0064fe',
    labelStyle: {
      color: '#33435b',
      fontWeight: 'normal',
      fontSize: '16px'
    }
  },
  badge: {
    primary: {
      backgroundColor: '#fbe400',
      color: '#1a3b7a',
      top: '-7px',
      right: '-7px',
      width: '18px',
      height: '18px',
      fontSize: '11px'
    }
  }
}
