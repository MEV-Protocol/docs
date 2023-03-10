import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'

# Protocol Overview

<Bleed>
<div align="center">
![Velocimeter Problem Statement](/dome.jpg)
</div>

</Bleed>


&nbsp;


## Liquidity Providing and Liquidity Incentivization

Almost every protocol in DeFi needs to have a certain amount of liquidity for one reason or another. This has two major benefits; it provides value to tokens, and usually makes them obtainable.

| Liquidity    | Example   | Benefit                                        |
| ------------ | --------- | ---------------------------------------------- |
| Native token | WETH-USDC, NOTE-wCANTO | Treasury access to capital markets             |
| [Stablecoins](https://youtu.be/XfU9oTCAbF0)  | NOTE-USDC  | Ensure stability by minimizing depeg risk      |
| Pegged asset | ETH-stETH | Minimize opportunity cost of converting assets |

Here is a simple [DeFI 101 Youtube Playlist](https://youtu.be/C-yfWPvdxt8) if this is something you would like. 

Common solutions of liquidity provision can be with the following:

- Pool 2 emissions (i.e. attaching a reward to staked LPs) AKA. Yield Farms, allow projects to distribute tokens to providers of liquidity.

- Protocol owned liquidity allows token holders a level of security and stability in price, as well as at certain times give projects the ability to accumulate tokens of another project.

- Tokens with voting powers have been know to get alternative token bribes to sway their votes. 

Here is a simple [DEx Youtube Video](https://youtu.be/xvwcaQmJPxg).

## Introducing Velocimeter 🌊

Velocimeter presents an attractive platform to over liquidity needs to projects.

Velocimeter was based on Velodrome which had made improvements to the Solidly codebase/logic to carry out the original intended mechanism of allowing voters to _fairly compensate_ LPs for impermanent loss.

Solidly had several key issues that prevented its success in the Fantom ecosystem

<Callout>Here is a simply, early, video explainer of the [Solidly system](https://youtu.be/x3vhNw2g-CU) - It's highly recommended that you watch this video. Both Velocimeter and Velodrome are similar enough to warrant a watch. </Callout>

## Changes to the Logic of Velodrome
The most significant change is how fees are handled. In Velocimeter, the fees are sent direct to External Bribes, bypassing the Internal Bribes system. This creates the benefit of having a more predictable voting experience for voters where voters can see the entire some of tokens that their votes will currently get a pro-rata share of. 

## Velodromes Changes: Tying Rewards with Emissions
- Voters to make only one "active" voting decision (i.e. `Voter.vote()`, `Voter.reset()`) every epoch.
- Additionally, bribes from fees (_internal_) and external sources (_external_) are treated slightly different.
  Internal bribes are extracted from each swap and are converted to external bribes for that specific pool.
  External bribes are rewarded _per epoch_ and are claimable only after the next epoch starts, when all votes are tallied.
  This means that a bribe sent at the last minute of an epoch will accrue to all voters of that epoch, and be claimable once the epoch flips. *(This is no longer valid on Velocimeter.)*

## Improvement: Ensuring Productive Gauges

**In Solidly, exploitive voters were able to direct emissions towards unproductive gauges, including those for pools 100% owned by those voters.** Velodrome and thus Velocimeter addresses this in three ways:

- First, the team only has the ability to whitelist tokens for gauges. 

The basic guidelines for whitelisting a token is a commitment to supply, or have, a TVL in the pool of at least $10,000 USD. This ensures trading in that pool at least a small measure of stability before a gauge is granted. There could be individual cases where this requirement might be modified.

<Callout>If your team wants a gauge, we suggest you first ask for token whitelisting prior to making the gauge. This is because you will be able to complete the entire process. However, if you have already created a liquidity pool, we can still help you to get a gauge.</Callout> 

- Second, we've also added an Emergency ["Council"](), which has the ability to perform the following functions 
| Function           | Purpose                                                        |
| killGauge          | This kills a certain gauge and stops it from receiving FLOW    |
| reviveGauge        | This resets a killed gauge and allow to to start receiving FLOW |
| setEmergencyCouncil| This changes the MSIG address                                  |

Any gauge that is deemed unproductive to the broader ecosystem or violates the agreement with the partners. ie, isn't using a valid rightside token, may be killed. This Council will start off containing only the Velocimeter core team but individuals from the community will be added later, and the broader DeFi ecosystems. The Council of Velocimetry multisig is available here, and signers include:

| Signer      | Affiliation      | Address                                    |
| ----------- | ---------------- | ------------------------------------------ |
| Ceazor      | Velocimeter      | 0x3c5Aac016EF2F178e8699D6208796A2D67557fe2 |
| Dunks       | Velocimeter      | 0x53f3B51FD7F327E1Ec4E6eAa3A049149cB2acaD2 |
| Torbik      | Velocimeter      | 0x0b776552c1Aef1Dc33005DD25AcDA22493b6615d |
| Coming Soon | Degen            | 0xSuperDegenThatWantsToGoWithTheFlowWithUs |

In Velcimeter, Liquidity Pool that DO NOT have  gauge forfeit their trading fees to the tank. on this [here.](/guages)

## Further Velodrome adopted features

**In Solidly, protocol emissions decayed too quickly, leading to minimal incentives for late entrants.** Obviously early adopters should be rewarded for the risks they're taking, but we observed that the emissions decayed too quickly in the Solidly model. As a result, we made a few small tweaks to ensure that while early adopters would still be rewarded, the protocol would still be an attractive opportunity for future protocols.

- First, we modified the emissions growth function to

    > (FLOW.totalSupply ÷ FLOW.totalsupply)³ × 0.5 × Emissions

- Second, there is no negative voting.
- Third, there is no emissions "boost" for voters.
- Fourth, the initial distribution has been carefully selected to include partner protocols that were felt would bring their own types of unique value to the ecosystem.


<Callout>
Here is a link to [Velodrome Finance 🚴‍♀️💨🌈](https://app.velodrome.finance/) 
</Callout>

