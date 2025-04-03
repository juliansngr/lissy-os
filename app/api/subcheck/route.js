export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  const streamerId = process.env.STREAMER_ID;
  const streamerToken = process.env.STREAMER_ACCESS_TOKEN;
  const clientId = process.env.TWITCH_CLIENT_ID;

  const response = await fetch(
    `https://api.twitch.tv/helix/subscriptions?broadcaster_id=${streamerId}&user_id=${userId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${streamerToken}`,
        "Client-Id": clientId,
      },
    }
  );

  const { data } = await response.json();

  const isSubbed = data.length > 0;

  if (response.ok) {
    return Response.json({
      isSub: isSubbed,
      ...(isSubbed && { tier: data[0].tier }),
    });
  } else if (response.status === 401) {
    return new Response("Unauthorized! Token ungültig oder abgelaufen!", {
      status: response.status,
    });
  } else if (response.status === 403) {
    return new Response("Forbidden! Fehlender Scope oder falscher Zugriff!", {
      status: response.status,
    });
  } else if (response.status === 500) {
    return new Response("Twitch-Serverproblem!", { status: response.status });
  } else {
    return new Response("Unbekannter Fehler mit Twitch API", {
      status: response.status,
    });
  }
}
