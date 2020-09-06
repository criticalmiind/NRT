import fonts from './fonts';
import metrics from './metrics';
import colors from './colors';

const Styles = {
  screen: {
    mainContainer: {
      flex: 1,
      // backgroundColor: colors.white,
    },

    container: {

    },

    title: {

    },

    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  },

  columnContainer: {
    flexDirection: 'column',
  },
  rowContainer: {
    flexDirection: 'row',
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  end: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  smallCircle: {
    height: metrics.icons.small * 2 / 3,
    width: metrics.icons.small * 2 / 3,
    borderRadius: (metrics.icons.small * 2 / 3) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrap: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  inputField: {

  },

  commentInputField: {

  }
};

export default Styles;
