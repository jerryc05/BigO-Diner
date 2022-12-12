import { isDark } from '@/states'

export default ()=> (<>
 <div class="mb-3 text-3xl">
    Hi,
    <b>jerryc05!</b>
  </div>
  <div class="mb-2 text-md uppercase">
    Welcome to {isDark() ? 'BigO' : 'MilkTea' } Diner!
  </div>
</>)
