import { NextRequest, NextResponse } from "next/server";

const BASE_API_URL = "https://investoxpert-mock-api.vercel.app/api/projects";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const queryString = searchParams.toString();
    const fetchUrl = queryString ? `${BASE_API_URL}?${queryString}` : BASE_API_URL;

    const response = await fetch(fetchUrl);

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: `Failed to fetch from API: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
