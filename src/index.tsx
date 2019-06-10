import * as React from "react";
import { connect, MapStateToProps } from "react-redux";

interface ComponentProps {
  a: number;
  b: string;
}

const Component: React.FC<ComponentProps> = props => {
  return <div />;
};

const mapStateToProps: MapStateToProps<ComponentProps, {}, {}> = () => ({
  a: 1,
  b: "2"
});

const Connected = connect<ComponentProps>(mapStateToProps)(Component);

const ConnectedWithOptions = connect<ComponentProps>(
  mapStateToProps,
  null,
  null,
  { withRef: true }
)(Component);

export const connected = <Connected />;
export const connectedWithRef = <ConnectedWithOptions />;
