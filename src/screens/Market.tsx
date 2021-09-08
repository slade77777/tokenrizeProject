import React, {FC, useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useMarkets, useMarketSummary} from '../hooks/useMarkets';
import BigList from 'react-native-big-list';
import {ImageEndPoint} from '../constants';
import FastImage from 'react-native-fast-image';
import {Coin, Summary, Market} from '../model/market';

function convertSummaryData(summaries: Array<Summary>): any {
  return summaries.reduce((acc, curr) => ({...acc, [curr.market]: curr}), {});
}

function calculateValueChange(item: Summary) {
  if (!item.lastPrice || !item.openPrice) {
    return '';
  }
  const diff = item.lastPrice - item.openPrice;
  if (diff !== 0) {
    return `${diff > 0 ? '+' : ''}${(diff / item.lastPrice).toFixed(3)}`;
  } else {
    return 'not change';
  }
}

const MarketView: FC = () => {
  const markets = useMarkets();
  const summary = useMarketSummary();
  const marketData = markets?.data?.data?.data || [];
  const summaryData = summary?.data?.data?.data || [];

  const summaryConverted = useMemo(() => {
    return convertSummaryData(summaryData);
  }, [summaryData.length]);

  const [selectMarket, setSelectMarket] = useState<Market>({
    title: '',
    list: [],
  });

  useEffect(() => {
    if (marketData.length > 0) {
      setSelectMarket(marketData[0]);
    }
  }, [marketData.length]);

  if (markets?.isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  function chooseSummary(market: Market) {
    market.title !== selectMarket.title && setSelectMarket(market);
  }

  const renderItem = ({item, index}: {item: Coin; index: number}) => {
    const record = item;
    const staticData = summaryConverted?.[record.marketName];
    return (
      <View style={styles.wrap} key={index}>
        <View style={styles.card}>
          <View style={styles.inline}>
            <FastImage
              style={{width: 40, height: 40}}
              source={{
                uri: `${ImageEndPoint}/${record?.marketCurrency?.toLowerCase()}.png`,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View style={{marginLeft: 10, justifyContent: 'space-between'}}>
              <Text style={styles.nameText}>{record?.marketCurrency}</Text>
              <Text style={styles.longText}>{record?.marketCurrencyLong}</Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.nameText}>
              ${staticData?.lastPrice ? staticData?.lastPrice.toFixed(5) : ''}
            </Text>
            <Text style={styles.changeText}>
              {staticData ? calculateValueChange(staticData) : ''}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.market}>MARKETS</Text>
        <Image source={require('../images/search.png')} style={styles.search} />
      </View>
      <FlatList
        data={marketData}
        horizontal={true}
        style={{height: 60, flexGrow: 0}}
        showsHorizontalScrollIndicator={false}
        renderItem={item => {
          const market = item.item;
          return (
            <TouchableOpacity
              onPress={() => chooseSummary(market)}
              style={{
                ...styles.option,
                backgroundColor:
                  selectMarket.title === market?.title ? '#6992FF' : '#E4E9F9',
              }}>
              <Text>{market.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <BigList
        style={styles.container}
        data={selectMarket.list || []}
        itemHeight={90}
        renderItem={renderItem}
        horizontal={false}
        inverted={false}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  market: {
    fontWeight: '700',
    fontSize: 16,
    color: '#3D436C',
  },
  body: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(248,249,253, 1)',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  search: {
    width: 20,
    height: 20,
  },
  option: {
    paddingHorizontal: 25,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    marginRight: 15,
  },
  loading: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  container: {
    flex: 1,
  },
  wrap: {
    paddingVertical: 10,
    backgroundColor: 'rgba(248,249,253, 1)',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inline: {
    flexDirection: 'row',
  },
  nameText: {
    fontWeight: '700',
    color: '#3D436C',
    fontSize: 15,
  },
  longText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#8E92B2',
  },
  changeText: {
    fontSize: 13,
    fontWeight: '500',
  },
});

export default MarketView;
