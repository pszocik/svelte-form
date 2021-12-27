<script lang="ts">
  import { username } from '../stores'
  export let authenticated

  interface CredentialsInterface {
    login: string
    password: string
  }

  let login: string
  let password: string

  const validateCredentials = (credentials: CredentialsInterface): void => {
    authenticated = credentials.login === 'admin' && credentials.password === 'admin'
    if (authenticated) {
      username.set(login)
    }
  }
</script>

<form on:submit|preventDefault={() => validateCredentials({ login, password })}>
  <input type="text" placeholder="Login" bind:value={login} />
  <input type="password" placeholder="Password" bind:value={password} />
  <button type="submit">Login</button>
</form>
