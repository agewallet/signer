import * as React from "react";
import { View, ScrollView } from "react-native";

// Components
import Wrapper from "@components/Wrapper";
import Header from "@components/Header";
import AssetCard from "@components/AssetCard";

// Utils
import { push } from "@utils/navigation";

// Config
import * as screens from "@config/screens";

// Styles
import styles from "./styles";

interface Props {
  componentId: string;
}

type TAsset = {
  name: string;
  symbol: string;
};

const assets: TAsset[] = [
  {
    name: "Bitcoin",
    symbol: "btc",
  },
  {
    name: "Litecoin",
    symbol: "ltc",
  },
];

const ManageAssets: React.FC<Props> = (props) => {
  const { componentId } = props;

  const onViewAsset = (asset: TAsset) => (): void => {
    push(componentId, screens.ASSET, {
      ...asset,
    });
  };

  return (
    <Wrapper componentId={componentId} withTabs activeTab="manageAssets">
      <Header title="Manage assets" />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {assets.map((asset) => {
            const { name, symbol } = asset;

            return (
              <AssetCard
                key={`${name}/${symbol}`}
                name={name}
                symbol={symbol}
                onPress={onViewAsset(asset)}
              />
            );
          })}
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default ManageAssets;
