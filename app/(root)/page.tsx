import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Mugambi', lastName:'Javan', email:'mugambijavan@gmail.com'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
            type= "greeting"
            title= "Welcome"
            user= {loggedIn?.firstName || 'User'}
            subtext= "Access your Bank accounts"
          />

          <TotalBalanceBox 
            accounts= {[]}
            totalBanks= {1}
            totalCurrentBalance= {10000}
          />
        </header>

      </div>
      <RightSideBar 
      user={loggedIn}
      transactions= {[]}
      banks= {[{}, {}]}
      
      />
    </section>
  )
}

export default Home