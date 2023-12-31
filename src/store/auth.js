import  {  sdk  }  from  '../appwrite';
import  {  writable  }  from  'svelte/store';

const  createState  =  ()  =>  {
	const  {  subscribe,  set,  update  }  =  writable({
		account:  null,
		alert:  null
	});

  return  {
    subscribe,
    signup:  async  (email,  password,  name)  =>  {
      return  await  sdk.account.create('unique()',  email,  password,  name);
    },
    user:  async  ()  =>  {
      return  await  sdk.account.get();
    },
    login:  async  (email,  password)  =>  {
      await  sdk.account.createEmailSession(email,  password);
      const  user  =  await  sdk.account.get();
      state.init(user);
    },
    logout:  async  ()  =>  {
      await  sdk.account.deleteSession('current');
    },
    alert:  async  (alert)  =>
      update((n)  =>  {
      n.alert  =  alert;
      return  n;
    }),
    init:  async  (account  =  null)  =>  {
      return  set({  account, alert:  null  });
    },
    checkSession:  async  ()  =>  {
      const  user  =  await sdk.account.get();
      state.init(user);
    },
    googleAuth: async () => {
      //const url = await sdk.account.createOAuth2Session('google', 'https://sveltekit-app-phi.vercel.app/');
      const url = await sdk.account.createOAuth2Session('google', 'http://127.0.0.1:5173/');
      const  user  =  await sdk.account.get();
      state.init(user);
    },
    updateName: async (name) => {
      await sdk.account.updateName(name);
    },
    updatePassword: async (password) => {
      await sdk.account.updatePassword(password);
    },
    getGoogleAuthSession: async (code) => {
      const { session } = await sdk.account.createOAuth2SessionCallback('google', code);

      return session;
    }
  };
};

export  const  state  =  createState();
