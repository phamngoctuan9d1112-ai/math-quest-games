export async function loadWorld(world: number) {
    const data = await import(`./world${world}.json`);
    return data.default;
}