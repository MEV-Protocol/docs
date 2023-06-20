import Bleed from 'nextra-theme-docs/bleed';

import { Chart } from "react-google-charts";

# Canto Tokenomics

<Bleed>
<div align="center">
  ![The FLOW Token](/Flow-circle-aqua.png)
</div>
</Bleed>

&nbsp;

Velocimeter uses two tokens to manage its utility and governance:

- `FLOW` &mdash; ERC-20 utility token of the protocol
- `veFLOW` &mdash; ERC-721 governance token in the form of an NFT
  (non-fungible token)

`FLOW` is used for rewarding liquidity providers through emissions.

`veFLOW` is used for governance. Any `FLOW` holder can vote-escrow their tokens and
receive a `veFLOW` (also known as veNFT) in exchange. Additional tokens can be
added to the `veFLOW` NFT at any time.

The lock period (also known as vote-escrowed period, hence the _ve_ prefix) can be up
to 4 years, following the linear relationship shown below:

- 100 `FLOW` locked for 4 years will become 100 `veFLOW`
- 100 `FLOW` locked for 1 year will become 25 `veFLOW`

The longer the vesting time, the higher the voting power (voting weight) and
rewards the `veFLOW` holder receives.

## ve(3,3) Mechanics

Velocimeter mechanics reflect a combination of two DeFi concepts:

- Vote-Escrow &mdash; first introduced by Curve to strengthen incentives for long-term token holders
- Staking/Rebasing/Bonding or (3,3) game theory &mdash; designed by Olympus DAO

Combined, the _ve(3,3)_ mechanism rewards behaviors correlated with Velocimeter's success, such as
liquidity provision and long-term token holding. Liquidity providers receive `FLOW` emissions,
and `veFLOW` holders receive protocol fees, bribes, rebases, and governance power.


## Version 2 Relaunch Tokennomic Distribution
(For initial tokenomics see below)

The initial supply was reduced to 300M FLOWv2 (v2 will still be called FLOW)
* 218M were all locked in veFLOW
* 82M were used for FLOWv1 redemption, migration bonus, dev vesting, Protocol Fund.

### 220M veFLOW
* A snapshot was taken of all veFLOW holders and community created veFLOW were increased by 1.2x
* Protocol Owned Voting Power (POVP) was reduced to 23M in various sizes all 4 year locked.
* 129M FLOW were locked in veFLOW of various sizes, and with varying lock times (min 1 year), for future partners, and raising capital.

### 80M FLOW
* 54M FLOW were fed into the redeemer for the community to redeem FLOWv1 for FLOWv2
* 4.5M were deposited into a linear 1 year vesting contract for the core dev team.
* 23.5M were deposited into treasury for proctocl own token to be used as determined in the future. ie, migration bonuses, deepening liquidity, custom size veFLOW minting, grants.

### Distribution Chart

<Bleed>
  <Chart
    chartType="PieChart"
    data={[
      [ "Receivers", "Amount" ],
      [ "Snapshot veFLOW", 12],
      [ "Protocol Owned NFTs", 23 ],
      [ "Velocimeter Team NFTs", 54],
      [ "Partner Protocol/DAOs NFTs", 127],
      [ "FLOWv2 Redeemer", 54],
      [ "Migration Bonus", 5],
      [ "Protocol FLOW Fund", 20.5],
      [ "1yr Dev Vesting", 4.5]
    ]}
    options={{
      title: "FLOW Distribution (M)",
      backgroundColor: '#111111',
      colors: ['#046971', '#10575D', '#1D565B', '#003C40', '#4EAC9D', '#3BBFAA', '#21CCB1', '#00E5C3' ],
      legend: {textStyle: {color: 'white' }},
      pieHole: 0.4,
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>

## Migration Steps
### veFLOW 
*  Nothing. veFLOW was airdropped.

### FLOWv1 -> FLOWv2 
*  Collect up your FLOWv1 from claiming from gauges.
*  Collect up your FLOWv1 from dismantling any FLOW liquidity you have provided.
*  Go to the REDEEM tab on the site and follow the simple 1 way swap. This should be done within 1 week. Any FLOWv1 that is not redeemed before the next epoch flip will not be able to be redeemable. This is because it’s not possible to turn off the V1 contracts and it’s still possible for these contracts to continue to be farmed. 

### Add Liquidity
- After converting your FLOWv1 to FLOWv2, those that want to addLiquidity to FLOW pairs on v2 are encouraged to do so.
5M FLOW tokens will be used to create new veFLOW and given prorata to people that create FLOW:wCANTO, FLOW:NOTE pairs

#### Out of the Shoals
Im a big fan of movies like Master and Commander, and Pirates of the Caribbean.
I can help but feel like those captains that wake up to danger.
Usually it’s the case of an attack, but in this cause I consider it more like drifting into shoals. 
This process was to say the least stressful, but we have come through it.
I foresee smooth sailing from here on, and soon we will all find ourselves safely anchored outside our favorite port city.

## Gauge Voting

`veFLOW` holders decide which liquidity pools receive emissions in a given epoch by
voting on their preferred liquidity pool _gauges_. `FLOW` emissions will be distributed
proportionally to the total votes a liquidity pool receives.

In return, voters receive 100% of the trading fees and bribes collected through the
liquidity pool they vote for.

More information on voting can be found the [Voting Section](/voting) section of this document.

### Emission Schedule

<Bleed>
  <Chart
    chartType="LineChart"
    data={[
      ["Week", "LP Emissions", "veRebase (@50% locking rate)", "Total Supply"],
      ["1", 15, 0, 300],
      ["50", 9.1, 2, 750],
      ["100", 5.5, 1.5, 1125],
      ["150", 3.3, 1, 1275],
      ["200", 2, 0.5, 1350]
    ]}
    options={{
      title: "FLOW Emissions (M)",
      curveType: 'function',
      aggregationTarget: 'series',
      selectionMode: 'multiple',
      legend: { position: "top", textStyle: {color: 'white'}},
      series: {
        0: { targetAxisIndex: 0 },
        1: { targetAxisIndex: 0 },
        2: { targetAxisIndex: 1 },
      },
      vAxes: {
        1: { title: "Total Supply", titleTextStyle: { color: 'white' }},
        0: { title: "Epoch Distribution", titleTextStyle: { color: 'white' }}
      },
      hAxis: {
        title: "Week", titleTextStyle: { color: 'white' },
      },
      backgroundColor: '#111111',
      lineWidth: 3,
      colors: ['#79F8DB', '#2180DF', '#EA1000', '#59BFD8', '#0281FF'],
      legend: {textStyle: {color: 'white'}},
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>

## Whitelisting

While Velocimeter supports permissionless liquidity pool. Gauge creation can
only include _whitelisted_ tokens. Part of the partner onboarding program will include whitelisting of their tokens where needed.

Partners can request additional tokens to be _whitelisted_.
There is a complete list of all the whitelisted tokens in the [Gauges Section](/gauges)

## Council of Velocimetry

Requirements for _whitelisting_ are critical to ensuring that the protocol cannot
be exploited by actors attempting to game emissions.

To support the health of the protocol and ecosystem, the Council of Velocimetry (similar to the Curve.Finance _Emergency DAO_)
will have the right to disable hostile gauges.

An example of a hostile gauge would be one that has two tokens that cannot be obtained public via any route either inside Velocimeter or in other protocols.

The Council of Velocimetry will initially consist of members from the Velocimeter team but community members will be recruited to bolster this role.

## Initial Distribution for Canto FLOWv1 (NO LONGER VALID)

At launch 630M `FLOW` were minted. 
### Locked As NFTs
470M `FLOW` were locked for 4 years in `veFLOW` of various sizes. 1M, 4M, 6M These veNFT are described below. 
* 90M of 470M were allocated for Velocimeter (PONFT)
* 108M of 470M were allocated for the team
* 272M of 470M are allocated for project partners and public sales

### Loose tokens
* 94M `FLOW` Tokens were pre-minted for the gauges and this current balance can be seen [here](https://evm.explorer.canto.io/address/0x0cEd59FF9BDe47b2F5F0EDD2FdFfA6a0116d91Cd)
* 10M `FLOW` Tokens were minted for initial liquidity and to deepen liquidity 
* 56M `FLOW` Token were left loose for adding to initial liquidity, bribes, Community veFLOW boosts, adding to POL

<Bleed>
  <Chart
    chartType="PieChart"
    data={[
      [ "Receivers", "Amount" ],
      [ "Protocol Owned NFTs", 90 ],
      [ "Velocimeter Team NFTs", 108],
      [ "Partner Protocol/DAOs NFTs", 272],
      [ "Gauge Premint", 94],
      [ "Team Controlled Initial Liquidity", 10],
      [ "Protocol FLOW Fund", 56]
    ]}
    options={{
      title: "FLOW Distribution (M)",
      backgroundColor: '#111111',
      colors: ['#58FF33', '#43CD24', '#37A220', '#297818', '#CCFF2C', '#367A2B' ],
      legend: {textStyle: {color: 'white' }},
      pieHole: 0.4,
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>







