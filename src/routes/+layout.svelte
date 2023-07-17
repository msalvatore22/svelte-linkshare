<script lang="ts">
    import { db, user, userData } from "$lib/firebase";
    import "../app.css"

    $user
    $userData
</script>

<div class="min-h-screen flex flex-col">
    <slot />
</div>
