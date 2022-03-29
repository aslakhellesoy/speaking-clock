package clock;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SpeakingClockTest {
    private final SpeakingClock clock = new SpeakingClock();

    @Test
    void it_translates_1_00_to_one_o_clock() {
        assertEquals("one o'clock", clock.speak("1:00"));
    }
}
