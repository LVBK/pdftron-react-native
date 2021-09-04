import React, { PureComponent } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import {
  requireNativeComponent,
  ViewPropTypes,
  Platform
} from 'react-native';

/** 
 * @interface
 * @description This object outlines valid {@link PDFViewCtrl} class props. 
 * These can be passed into {@link PDFViewCtrl} to customize the viewer.
 */
const PDFViewCtrlPropTypes = {
    /**
   * @type {string}
   * @description The path or url to the document. Required.
   * @example
   * <PDFViewCtrl
   *   document={'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_about.pdf'}
   * />
   */
  document: PropTypes.string.isRequired,
}

type PDFViewCtrlProps = InferProps<typeof PDFViewCtrlPropTypes>;

/**
  * @class
  * @classdesc A React component for displaying documents of different types such as PDF, docx, pptx, xlsx and various image formats. 
  * 
  * PDFViewCtrl is useful when a higher level of customization is required. For easy all-in-one document viewing and editing, use {@link DocumentView}.
  * @hideconstructor
  */
export class PDFViewCtrl extends PureComponent<PDFViewCtrlProps, any> {

    /**
   * Properties to pass into {@link PDFViewCtrl}. See {@link PDFViewCtrlPropTypes} for the full list of properties and their documentation.
   */
     static propTypes = Object.assign(PDFViewCtrlPropTypes, {...ViewPropTypes});

  render() {
    return (
      <RCTPDFViewCtrl
        // @ts-ignore
        style={{ flex:1 }}
        {...this.props}
      />
    )
  }
}

const name = Platform.OS === 'ios' ? 'RNTPTPDFViewCtrl' : 'RCTPDFViewCtrl';

const RCTPDFViewCtrl = requireNativeComponent(name);